import { Socket } from "socket.io-client";
import io from "socket.io-client"
import ProgrammingLanguage from "../programmingLanguage";

const socketUrl = `ws://${process.env.VUE_APP_URL}:${process.env.VUE_APP_SOCKET_PORT}`;

type RunningSubmission = {
    id: string,
    coderId: string,
    problemId: string,
    submittedAt: string,
    judgingTestCase: number,
    totalTestCases: number,
    programmingLanguage: ProgrammingLanguage
}

export default class JudgingTestCase {
    private static instance: JudgingTestCase;
    private socket: Socket | null
    private loopers: Map<string, any>

    private constructor() {
        this.socket = null
        this.loopers = new Map()
    }

    public static getInstance(): JudgingTestCase {
        if (!JudgingTestCase.instance) {
            JudgingTestCase.instance = new JudgingTestCase();
        }
        return JudgingTestCase.instance;
    }

    isConnecting() {
        if (this.socket === null)
            return false
        if (!this.socket.connected)
            return false
        return true
    }

    start() {
        this.close()
        this.socket = io(socketUrl, { transports: ['websocket'] })
        const socket = this.socket
        return new Promise<void>((resolve, reject) => {
            socket.on('connect', function () {
                resolve()
            })
        })
    }

    queryRunningSubmission(runningSubmissionId: string) {
        if (this.socket === null)
            return
        const socket = this.socket
        const loopers = this.loopers
        if (loopers.has(runningSubmissionId))
            return
        loopers.set(runningSubmissionId, setInterval(() => {
            socket.emit('PRACTICE_PROBLEM.GET_RUNNING_SUBMISSION', runningSubmissionId)
        }, 2000))
    }

    getRunningSubmission(callback: (data: RunningSubmission | string) => void) {
        if (this.socket === null)
            return
        
        const socket = this.socket
        const loopers = this.loopers
        socket.on('PRACTICE_PROBLEM.RETURN_RUNNING_SUBMISSION', function (data: RunningSubmission | string) {
            callback(data)
            if (typeof data === 'string') {
                clearInterval(loopers.get(data))
                loopers.delete(data)
            } else {
                
            }
        })
    }

    close() {
        this.loopers.forEach((looper, runningSubmissionId) => {
            clearInterval(looper)
        })
        this.loopers.clear()
        this.socket?.disconnect()
        this.socket === null
    }
}
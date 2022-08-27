const socketUrl = `ws://${process.env.VUE_APP_URL}:${process.env.VUE_APP_SOCKET_PORT}`;

export default class JudgingTestCase {
    private static instance: JudgingTestCase;
    private socket: WebSocket | null

    private constructor() {
        this.socket = null
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
        if (this.socket.readyState !== WebSocket.OPEN)
            return false
        return true
    }

    start() {
        this.socket = new WebSocket(socketUrl)
        
    }

    close() {
        this.socket?.close()
        this.socket === null
    }

}
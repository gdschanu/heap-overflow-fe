import FailedTestCase from "./failedTestCase"
import Kilobyte from "./kilobyte"
import Millisecond from "./millisecond"
import ProgrammingLanguage from "./programmingLanguage"
import Status from "./submissionStatus"

class Submission {
    private id: string
    private problemId: string
    private programmingLanguage: ProgrammingLanguage
    private runtime: Millisecond
    private memory: Kilobyte
    private submittedAt: Date
    private code: string
    private status: Status
    private coderId: string
    private message: string
    private failedTestCase: FailedTestCase | null
    constructor(
        id: string,
        problemId: string,
        programmingLanguage: ProgrammingLanguage,
        runtime: Millisecond,
        memory: Kilobyte,
        submittedAt: Date,
        code: string,
        status: Status,
        coderId: string,
        message: string,
        failedTestCase: FailedTestCase | null
    ) {
        this.id = id
        this.problemId = problemId
        this.programmingLanguage = programmingLanguage
        this.runtime = runtime
        this.memory = memory
        this.submittedAt = submittedAt
        this.code = code
        this.status = status
        this.coderId = coderId
        this.message = message
        this.failedTestCase = failedTestCase
    }

    getId(): string {
        return this.id
    }

    getProblemId(): string {
        return this.problemId
    }

    getProgrammingLanguage(): ProgrammingLanguage {
        return this.programmingLanguage
    }

    getRuntime(): Millisecond {
        return this.runtime
    }

    getMemory(): Kilobyte {
        return this.memory
    }

    getSubmittedAt(): Date {
        return this.submittedAt
    }

    getCode(): string {
        return this.code
    }

    getStatus(): Status {
        return this.status
    }

    getCoderId(): string {
        return this.coderId
    }

    getMessage(): string {
        return this.message
    }

    getFailedTestCase(): FailedTestCase | null {
        return this.failedTestCase
    }

    setCode(code: string): void {
        this.code = code
    }

    setStatus(status: Status): void {
        this.status = status
    }

    setMessage(message: string): void {
        this.message = message
    }

    setFailedTestCase(failedTestCase: FailedTestCase): void {
        this.failedTestCase = failedTestCase
    }

    setRuntime(runtime: Millisecond): void {
        this.runtime = runtime
    }

    setMemory(memory: Kilobyte): void {
        this.memory = memory
    }

    setSubmittedAt(submittedAt: Date): void {
        this.submittedAt = submittedAt
    }

    setCoderId(coderId: string): void {
        this.coderId = coderId
    }

    setProgrammingLanguage(programmingLanguage: ProgrammingLanguage): void {
        this.programmingLanguage = programmingLanguage
    }
}

export default Submission
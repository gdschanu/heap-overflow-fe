class TestCase {
    private problemId: string
    private input: string
    private expectedOutput: string
    private ordinal: number
    private isSample: boolean
    private description: string

    constructor(problemId: string, input: string, expectedOutput: string, ordinal: number, isSample: boolean, description: string) {
        this.problemId = problemId
        this.input = input
        this.expectedOutput = expectedOutput
        this.ordinal = ordinal
        this.isSample = isSample
        this.description = description
    }

    getProblemId(): string {
        return this.problemId
    }

    getInput(): string {
        return this.input
    }

    getExpectedOutput(): string {
        return this.expectedOutput
    }

    getOrdinal(): number {
        return this.ordinal
    }

    getSample(): boolean {
        return this.isSample
    }

    getDescription(): string {
        return this.description
    }

    setInput(input: string): void {
        this.input = input
    }

    setExpectedOutput(expectedOutput: string): void {
        this.expectedOutput = expectedOutput
    }

    setOrdinal(ordinal: number): void {
        this.ordinal = ordinal
    }

    setSample(isSample: boolean): void {
        this.isSample = isSample
    }

    setDescription(description: string): void {
        this.description = description
    }

}

export default TestCase
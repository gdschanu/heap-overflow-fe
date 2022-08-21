import TestCase from "./testCase";

class FailedTestCase {
    private failedAtLine: number
    private actualOutput: string
    private input: string
    private expectedOutput: string
    private description: string

    constructor(
        input: string,
        expectedOutput: string,
        description: string,
        failedAtLine: number,
        actualOutput: string
    ) {
        this.failedAtLine = failedAtLine
        this.actualOutput = actualOutput
        this.input = input
        this.expectedOutput = expectedOutput
        this.description = description
    }

    getFailedAtLine(): number {
        return this.failedAtLine
    }

    getActualOutput(): string {
        return this.actualOutput
    }
    
    getInput(): string {
        return this.input
    }

    getExpectedOutput(): string {
        return this.expectedOutput
    }
    
    getDescription(): string {
        return this.description
    }

    setExpectedOutput(expectedOutput: string): void {
        this.expectedOutput = expectedOutput
    }

    setFailedAtLine(failedAtLine: number): void {
        this.failedAtLine = failedAtLine
    }

    setActualOutput(actualOutput: string): void {
        this.actualOutput = actualOutput
    }

    setInput(input: string): void {
        this.input = input
    }

    setDescription(description: string): void {
        this.description = description
    }
}

export default FailedTestCase
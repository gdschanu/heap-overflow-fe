import getTestCaseApi from "../api/getTestCaseApi";
import TestCase from "../testCase";

async function getTestCasesById(id: string) {
    const testCases = await getTestCaseApi({ id })
    return testCases.map((testCase) => new TestCase(
        testCase.problemId,
        testCase.input,
        testCase.expectedOutput,
        testCase.ordinal,
        testCase.isSample,
        testCase.description
    ))
}

export {
    getTestCasesById
}
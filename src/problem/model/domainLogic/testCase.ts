import { createTestCaseApi } from "../api/testCase/createTestCase";
import getTestCaseApi from "../api/testCase/getTestCaseApi";
import TestCase from "../testCase";

async function getTestCasesById(id: string) {
  const testCases = await getTestCaseApi({ id });
  return testCases.map(
    (testCase) =>
      new TestCase(
        testCase.problemId,
        testCase.input,
        testCase.expectedOutput,
        testCase.ordinal,
        testCase.isSample,
        testCase.description
      )
  );
}

async function createTestCase(testCase: TestCase): Promise<String | null> {
  const message = await createTestCaseApi({
    problemId: testCase.getProblemId(),
    input: testCase.getInput(),
    expectedOutput: testCase.getExpectedOutput(),
    ordinal: testCase.getOrdinal(),
    isSample: testCase.getSample(),
    description: testCase.getDescription(),
  });
  return message;
}

export { getTestCasesById, createTestCase };

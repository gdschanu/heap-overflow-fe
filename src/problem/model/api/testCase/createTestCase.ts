import apiService from '@/shared/helpers/apiService';

type createTestCaseRequest = {
  problemId: String | null;
  input: String | null;
  expectedOutput: String | null;
  ordinal: number;
  isSample: boolean;
  description: String | null;
};

type Response = {
  code: String | null;
  message: String | null;
  data: String | null;
};

async function createTestCaseApi(
  request: createTestCaseRequest
): Promise<String | null> {
  try {
    const response = (
      await apiService("POST", "/practiceProblem/testCase", {}, request)
    ).data as Response;
    return response.message;
  } catch (error) {
    throw error;
  }
}

export { createTestCaseApi };

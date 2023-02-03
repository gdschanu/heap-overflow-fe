import apiService from '@/shared/helpers/apiService';
import ProgrammingLanguage from "../../programmingLanguage"
import Status from "../../submissionStatus"

type ListSubmissionRequest = {
    page: number,
    perPage: number,
    coderId: string,
    problemId: string,
}

type ListSubmissionResponse = {
    code: string | null,
    message: string,
    data: ListSubmissionResponseData | null
}

type ListSubmissionResponseData = Array<{
    id: string,
    problemId: string,
    programmingLanguage: ProgrammingLanguage,
    runTime: number,
    memory: number,
    submittedAt: string,
    code: string,
    status: Status,
    failedTestCaseDetail: {
        failedAtLine: number,
        input: string,
        actualOutput: string,
        expectedOutput: string,
        description: string
    } | null,
    coderId: string,
    message: string
}>

async function listSubmissionApi(req: ListSubmissionRequest) {
    const response = (await apiService('GET', '/practiceProblem/submission', req, {})).data as ListSubmissionResponse
    if (response.data === null)
        throw new Error(response.message)
    return response.data
}

export default listSubmissionApi
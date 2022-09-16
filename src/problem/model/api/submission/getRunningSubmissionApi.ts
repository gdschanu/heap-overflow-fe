import apiService from "@/problem/helpers/apiService"
import ProgrammingLanguage from "../../programmingLanguage"

type getRunningSubmissionRequest = {
    problemId: string,
    coderId: string,
    page: 0,
    perPage: 100
}

type GetRunningSubmissionResponse = {
    code: string
    message: string
    data: null | GetRunningSubmissionResponseData
}

type GetRunningSubmissionResponseData = {
    id: string,
    coderId: string,
    problemId: string,
    code: string,
    programmingLanguage: ProgrammingLanguage,
    submittedAt: string,
    judgingTestCase: number,
    totalTestCases: number,
}[]

async function getRunningSubmissionApi(req: getRunningSubmissionRequest) {
    const response = (await apiService('GET', `/practiceProblem/runningSubmission`, req, {})).data as GetRunningSubmissionResponse
    if (response.data === null)
        throw new Error('Error while fetching running submissions')
    return response.data
}

export default getRunningSubmissionApi
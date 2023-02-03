import apiService from '@/shared/helpers/apiService';
import ProgrammingLanguage from '../../programmingLanguage'
import Status from "../../submissionStatus";

type getSubmissionRequest = {
    id: string
}

type GetSubmissionResponse = {
    code: null | GetSubmissionResponseCode
    message: string
    data: null | GetSubmissionResponseData
}

enum GetSubmissionResponseCode {
    NOT_FOUND = 'NOT_FOUND',
    JUDGING_SUBMISSION = 'JUDGING_SUBMISSION',
}

type GetSubmissionResponseData = {
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
}

async function getSubmissionApi(req: getSubmissionRequest) {
    const response = (await apiService('GET', `/practiceProblem/submission/${req.id}`, {}, {})).data as GetSubmissionResponse
    if (response.code === 'NOT_FOUND' && response.data === null)
        throw new Error('Submission not found ')
    if (response.code === 'JUDGING_SUBMISSION' && response.data === null)
        throw new Error('Submission is being judged')
    if (response.data === null)
        throw new Error('Submission not found')
    return response.data
}

export default getSubmissionApi
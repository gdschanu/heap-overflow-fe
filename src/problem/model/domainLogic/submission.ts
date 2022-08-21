import getSubmissionApi from "../api/submission/getSubmissionApi";
import listSubmissionApi from "../api/submission/listSubmission";
import submitApi from "../api/submission/submitApi";
import FailedTestCase from "../failedTestCase";
import Kilobyte from "../kilobyte";
import Millisecond from "../millisecond";
import Problem from "../problem";
import ProgrammingLanguage from "../programmingLanguage";
import Submission from "../submission";

async function getSubmissionById(id: string) {
    const responseData = await getSubmissionApi({ id })
    const submission = new Submission(
        id,
        responseData.problemId,
        responseData.programmingLanguage,
        new Millisecond(responseData.runTime),
        new Kilobyte(responseData.memory),
        new Date(responseData.submittedAt.slice(0, 10)),
        responseData.code,
        responseData.status,
        responseData.coderId,
        responseData.message,
        responseData.failedTestCaseDetail === null ? null :
        new FailedTestCase(
            responseData.failedTestCaseDetail.input,
            responseData.failedTestCaseDetail.expectedOutput,
            responseData.failedTestCaseDetail.description,
            responseData.failedTestCaseDetail.failedAtLine,
            responseData.failedTestCaseDetail.actualOutput
        )
    )
    return submission
}

async function submit(problem: Problem, code: string, programmingLanguage: ProgrammingLanguage) {
    const responseData = await submitApi({
        problemId: problem.getId(),
        code,
        programmingLanguage
    })

    return responseData.submissionId
}

async function listSubmission(page: number, perPage: number, coderId: string, problemId: string) {
    const responseData = await listSubmissionApi({
        page,
        perPage,
        coderId,
        problemId
    })

    return responseData.map(item => new Submission(
        item.id,
        item.problemId,
        item.programmingLanguage,
        new Millisecond(item.runTime),
        new Kilobyte(item.memory),
        new Date(item.submittedAt.slice(0, 10)),
        item.code,
        item.status,
        item.coderId,
        item.message,
        item.failedTestCaseDetail === null ? null : new FailedTestCase(
            item.failedTestCaseDetail.input,
            item.failedTestCaseDetail.expectedOutput,
            item.failedTestCaseDetail.description,
            item.failedTestCaseDetail.failedAtLine,
            item.failedTestCaseDetail.actualOutput
        )
    ))
}

export {
    getSubmissionById,
    submit,
    listSubmission
}

import apiService from '@/shared/helpers/apiService';
import ProgrammingLanguage from "../../programmingLanguage";

type submitRequest = {
    problemId: string,
    code: string,
    programmingLanguage: ProgrammingLanguage
}

type submitResponse = {
    code: null | string,
    message: string,
    data: null | {
        submissionId: string
    }
}

async function submitApi(req: submitRequest) {
    const response = (await apiService('POST', `/practiceProblem/problem/${req.problemId}/submit`, {}, {
        code: req.code,
        programmingLanguage: req.programmingLanguage
    })).data as submitResponse
    if (response.data === null)
        throw new Error('Can\'t submit')
    return response.data
}

export default submitApi
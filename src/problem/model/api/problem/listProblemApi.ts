import apiService from "@/shared/helpers/apiService"
import Difficulty from "../../difficulty"
import { ProblemStatus } from "../../problemStatus"
import ProgrammingLanguage from "../../programmingLanguage"

type ListProblemRequest = {
    page: number
    perPage: number
}

type ListProblemResponse = {
    code: null | string
    message: string
    data: null | ListProblemResponseData
}

type ListProblemResponseData = Array<{
    id: string
    difficulty: Difficulty
    name: string
    description: string
    author: string
    memoryLimits: Array<{
        programmingLanguage: ProgrammingLanguage
        memoryLimit: number
    }>
    timeLimits: Array<{
        programmingLanguage: ProgrammingLanguage
        timeLimit: number
    }>
    allowedProgrammingLanguages: ProgrammingLanguage[],
    acceptance: number,
    tags: string[],
    status: ProblemStatus
}>

async function listProblemApi(req: ListProblemRequest): Promise<ListProblemResponseData> {
    try {
        const response = (await apiService('GET', '/practiceProblem/problem', req, {})).data as ListProblemResponse
        if (response.data === null)
            throw new Error('Cannot found any problem');
        return response.data
    } catch (error) {
        throw error
    }
}

export default listProblemApi
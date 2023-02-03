import apiService from '@/shared/helpers/apiService';
import ProgrammingLanguage from '../../programmingLanguage'
import Difficulty from '../../difficulty'
import { ProblemStatus } from "../../problemStatus";

type GetProblemRequest = {
    id: string;
}

type GetProblemResponse = {
    code: null | string
    message: string
    data: null | GetProblemResponseData
}

type GetProblemResponseData = {
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
    allowedProgrammingLanguages: ProgrammingLanguage[]
    acceptance: number
    tags: string[]
    status: ProblemStatus
}

async function getProblemApi(req: GetProblemRequest): Promise<GetProblemResponseData> {
    try {
        const response = (await apiService('GET', `/practiceProblem/problem/${req.id}`)).data as GetProblemResponse
        if (response.data === null)
            throw new Error('Problem not found')      
        return response.data
    } catch (error) {
        throw error
    }
}

export default getProblemApi
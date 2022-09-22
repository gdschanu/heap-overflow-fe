import apiService from "../coder/apiService"
import ProgrammingLanguage from '@/problem/model/programmingLanguage'
import Difficulty from '@/problem/model/difficulty'

type GetProblemRequest = {
    count: number;
}

type GetProblemResponse = {
    code: null | string
    message: string
    data: null | GetProblemResponseData
}


type GetProblemResponseData = Array<{
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
}>

async function getRecProblemApi(req: GetProblemRequest): Promise<GetProblemResponseData> {
    try {
        const response = (await apiService('GET', '/practiceProblem/problem/recommended', req)).data as GetProblemResponse
        if (response.data === null)
            throw new Error('Problem not found')      
        return response.data
    } catch (error) {
        throw error
    }
}

export default getRecProblemApi
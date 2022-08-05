import apiService from '../../helpers/apiService'
import Difficulty from '../difficulty'
import ProgrammingLanguage from '../programmingLanguage'
import MemoryLimit from '../memoryLimit'
import TimeLimit from '../timeLimit'


type CreateProblemRequest = {
    difficulty: Difficulty
    name: string,
    description: string,
    createTestCaseInput: Array<{
        input: string,
        expectedOutput: string,
        ordinal: number,
        isSample: boolean,
        description: string
    }>,
    createMemoryLimitInputs: Array<{
        programmingLanguage: ProgrammingLanguage,
        memoryLimit: number
    }>,
    createTimeLimitInputs: Array<{
        programmingLanguage: ProgrammingLanguage,
        timeLimit: number
    }>,
    allowedProgrammingLanguages: ProgrammingLanguage[]
}

type CreateProblemResponse = {
    code: null | string
    message: string
    data: null | string
}

async function createProblemApi(req: CreateProblemRequest): Promise<string> {
    try {
        console.log(req);
        
        const response = (await apiService('POST', '/practiceProblem/problem', {}, req)).data as CreateProblemResponse
        if (response.data === null)
            throw new Error('Problem not created')
        return response.data
    } catch (error) {
        throw error
    }
}

export default createProblemApi
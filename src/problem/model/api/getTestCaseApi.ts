import apiService from "../../helpers/apiService"

type getTestCaseRequest = {
    id: string
}

type getTestCaseResponse = {
    code: null | string
    message: string
    data: null | getTestCaseResponseData
}

type getTestCaseResponseData = Array<{
    problemId: string,
    input: string,
    expectedOutput: string,
    ordinal: number,
    isSample: boolean,
    description: string,
}>

async function getTestCaseApi(req: getTestCaseRequest) {
    try {
        const response = (await apiService('GET', `/practiceProblem/testCase/sample/${req.id}`)).data as getTestCaseResponse
        if (response.data === null)
            throw new Error('TestCase not found')
        return response.data
    } catch (error) {
        throw error
    }
}

export default getTestCaseApi
import apiService from "@/problem/helpers/apiService";

type countProblemsResponse = {
    code: null | string
    message: string
    data: null | number
}

async function countProblemsApi() {
    try {       
        const response = (await apiService('GET', '/practiceProblem/countProblem')).data as countProblemsResponse
        if (response.data === null)
            throw new Error('Can\'t count how many problems')
        return response.data
    } catch (error) {
        throw error
    }
}

export default countProblemsApi
import apiService from "../apiService"
type RegisterRequest = {
    email: string
    username: string
    password: string
}

type RegisterResponse = {
    code: null | string
    message: string
    data: null
}

async function registerApi(req: RegisterRequest): Promise<void> {
    try {
        const response = (await apiService('POST', '/coderAuth/signUp', {}, req)).data 
    } catch (error) {
        throw error
    }
}

export default registerApi
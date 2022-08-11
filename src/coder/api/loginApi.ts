import apiService from "../apiService"
type LoginRequest = {
    usernameOrEmail: string
    password: string
}

type LoginResponse = {
    code: null | string
    message: string
    data: null | string
}

 async function loginApi(req: LoginRequest): Promise<string> {
    try {
        const response = (await apiService('POST', '/coderAuth/logIn', {}, req)).data as LoginResponse
        if (response.data === null)
            throw new Error('Invalid username or password')
        return response.data
    } catch (error) {
        throw error
    }
}
export default loginApi

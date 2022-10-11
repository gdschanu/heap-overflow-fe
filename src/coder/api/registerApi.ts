import apiService from "../apiService"
type RegisterRequest = {
    email: string
    username: string
    password: string
}

type RegisterResponse = {
    code: null | string
    message: string
    data: responseData
}
type responseData = {
    coderId: string | null;
    token: string | null;
    username: string | null;
}
async function registerApi(req: RegisterRequest): Promise<RegisterResponse> {
    try {
        const response = (await apiService('POST', '/coderAuth/signUp', {}, req)).data as RegisterResponse
        return response;
    } catch (error) {
        throw error
    }
}

export default registerApi
import getCoderApi from "./api/getCoderApi"
import loginApi from "./api/loginApi"
import logoutApi from "./api/logoutApi"
import registerApi from "./api/registerApi"
import Coder from "./coder"

export async function login(usernameOrEmail: string, password: string) {
    const loginResponse = await loginApi({
        usernameOrEmail,
        password
    })
    const coder = await getCoderInfo(loginResponse.data.coderId)
    return {
        coder,
        accessToken: loginResponse.data.token
    }
}

export async function register(username: string, email: string, password: string) {
    const registerResponse = await registerApi({
        username,
        email,
        password
    })
    const coder = await getCoderInfo(registerResponse.data.coderId)
    return {
        coder,
        accessToken: registerResponse.data.token
    }
}

export async function logout(data: string) {
    await logoutApi({ token: data })
}

export async function getCoderInfo(coderId: string): Promise<Coder> {
    const getCoderResponse = await getCoderApi({
        coderId
    })
    if (getCoderResponse.data === null)
        throw new Error('Coder not found')
    
    const coder = new Coder(coderId)
    coder.name = getCoderResponse.data.name
    coder.avatar = getCoderResponse.data.avatar
    coder.age = getCoderResponse.data.age
    return coder
}
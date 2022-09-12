
import  {loginApi} from "./api/loginApi";
import logoutApi from "./api/logoutApi";
import registerApi  from "./api/registerApi";
import { getUserProfile } from "./api/getUserProfile";
import User  from "./user";

export async function login(user: User): Promise<string> {
    const usernameOrEmail = user.getName()? user.getName() : user.getEmail()
    const accessToken = (await (loginApi({
        usernameOrEmail,
        password: user.getPassword()
    }))).data;
   
    return JSON.stringify(accessToken)

}

export async function register(user: User): Promise<void> {
    await registerApi({
        email: user.getEmail(),
        username: user.getName(),
        password: user.getPassword()
    })
}
export async function logout(data: string): Promise<void> {
    await logoutApi({
        token : data
    })
}

export default {
    login,
    register,
    logout
}

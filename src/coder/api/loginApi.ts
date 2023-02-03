import apiService from "@/shared/helpers/apiService"
type LoginRequest = {
  usernameOrEmail: string
  password: string
};

type LoginResponse = {
  code: null | string
  message: string
  data: responseData
};

type responseData = {
  coderId: string
  token: string
  username: string
};

async function loginApi(req: LoginRequest): Promise<LoginResponse> {
  const response = (await apiService("POST", "/coderAuth/logIn", {}, req)).data as LoginResponse
  return response
}
export default loginApi

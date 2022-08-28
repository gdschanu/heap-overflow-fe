import apiService from "../apiService";
type LoginRequest = {
  usernameOrEmail: string;
  password: string;
};

type LoginResponse = {
  code: null | string;
  message: string;
  data: responseData;
};

type responseData = {
  coderId: string | null;
  token: string | null;
  username: string | null;
};

async function loginApi(req: LoginRequest): Promise<LoginResponse> {
  try {
    const response = (await apiService("POST", "/coderAuth/logIn", {}, req))
      .data as LoginResponse;
    return response ;
  } catch (error) {
    throw error;
  }
}
export { loginApi} ;

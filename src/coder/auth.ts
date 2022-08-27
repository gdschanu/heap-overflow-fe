import { loginApi } from "./api/loginApi";
import registerApi from "./api/registerApi";
import User from "./user";

export async function login(user: User): Promise<string> {
  const usernameOrEmail = user.getName() ? user.getName() : user.getEmail();
  const response = (
    await loginApi({
      usernameOrEmail,
      password: user.getPassword(),
    })
  ).data;
  return response.token as string;
}

export async function register(user: User): Promise<void> {
  await registerApi({
    email: user.getEmail(),
    username: user.getName(),
    password: user.getPassword(),
  });
}
export default {
  login,
  register,
};

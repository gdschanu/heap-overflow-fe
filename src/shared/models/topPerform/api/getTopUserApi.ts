import apiService from "../../../helpers/apiService";

type Request = {
  page: number;
  perPage: number;
};

type Response = {
  code: string | null;
  message: string | null;
  data: topUserList | null;
};

type topUserList = Array<{
  id: string | null;
  name: string | null;
  age: number | null;
  avatar: string | null;
  phone: string | null | number;
  university: string | null;
  slogan: string | null;
  gender: string | null;
  address: string | null;
  rank: number | null;
}>;

async function getTopUserApi(request: Request): Promise<Response> {
  try {
    const response = (await (
      await apiService("GET", "/coder/top", request, {})
    ).data) as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

export { getTopUserApi };

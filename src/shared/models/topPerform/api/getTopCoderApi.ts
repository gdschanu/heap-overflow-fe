import apiService from "../../../helpers/apiService";

type Request = {
  page: number;
  perPage: number;
};

type Response = {
  code: string | null;
  message: string;
  data: ResponseData | null;
};

type ResponseData = Array<{
  id: string;
  name: string;
  age: number;
  avatar: string;
  phone: string | number;
  university: string;
  slogan: string;
  gender: string;
  address: string;
  rank: number;
}>;

export default async function getTopUserApi(request: Request): Promise<Response> {
  try {
    const response = (await (
      await apiService("GET", "/coder/top", request, {})
    ).data) as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

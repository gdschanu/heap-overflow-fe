import apiService from "@/contest/helper/apiService";
type getCoderRequest = {
  coderId: string
}
type getCoderResponse = {
  code: string | null
  message: string
  data: null | getCoderResponseData
}
type getCoderResponseData = {
  name: string
  age: number
  university: string
  slogan: string
  avatar: any
  gender: string
  phone: number
  address: string
  coderId: string
}

async function getCoderApi(req: getCoderRequest): Promise<getCoderResponse> {
  const response = (await apiService("GET", `/coder/${req.coderId}`, {}, req)).data as getCoderResponse;
    return response
}
export default getCoderApi
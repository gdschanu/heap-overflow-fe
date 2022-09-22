import apiService from "@/contest/helper/apiService";
type getUserData = {
  coderId: string
}
type getUserResponse = {
    code: string | null
    message: string
    data: null | getUserResponseData
}
type getUserResponseData = {
    name: string 
    age : number 
    university: string
    slogan : string 
    avatar: any
    gender: string 
    phone: number 
    address: string 
    coderId: string
}

async function getUserApi(req : getUserData): Promise<getUserResponse>{
    try {
        const response = (await apiService("GET", `/coder/${req.coderId}`, {}, req)).data as getUserResponse;
        return response;
      } catch (error) {
        throw error;
      }
}
export {getUserApi}
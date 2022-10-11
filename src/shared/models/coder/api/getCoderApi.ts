import apiService from "@/contest/helper/apiService";
type getCoderData = {
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

async function getCoderApi(req: getCoderData): Promise<getCoderResponseData> {
    try {
        const response = (await apiService("GET", `/coder/${req.coderId}`, {}, req)).data as getCoderResponse;
        
        if (response.data === null) {
            throw new Error("coder info not found");
        }
        return response.data;
    } catch (error) {
        throw error;
    }
}
export { getCoderApi }
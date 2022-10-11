import apiService from "../apiService"
type logout = {
   token : string
}
type logoutresponse = {
    code : null
    message: string
    data :  null
}
async function logoutApi(req: logout): Promise<void> {
    try {
    (await apiService('POST', '/coderAuth/logOut', {}, req))
   
    } catch (error) {
        throw error
    }
}

export default logoutApi
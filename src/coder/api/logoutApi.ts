import apiService from "@/shared/helpers/apiService"

type logout = {
   token : string
}

async function logoutApi(req: logout): Promise<void> {
    await apiService('POST', '/coderAuth/logOut', {}, {}, {
        'token': req.token
    })
}

export default logoutApi
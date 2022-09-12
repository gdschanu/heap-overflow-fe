import apiService from "../apiService";
type getUserInfor = {
 accesstoken: string
};

type getInforResponse = {
  code: null | string;
  message: string;
  data: responseData;
};

type responseData = {
 name: string | null
 age : number
 university: null |string
 slogan: null | string 
 avatar: string
 gender: string | null
 phone : string | null
 address: string | null
};

async function getUserProfile(req: getUserInfor): Promise<getInforResponse> {
  try {
    const response = (await apiService("GET", "/coder", {}, req)).data;
    return response  ;
  } catch (error) {
    throw error;
  }
}
export {getUserProfile} ;
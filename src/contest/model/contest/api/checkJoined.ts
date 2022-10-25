import apiService from "../../../helper/apiService";

type Response = {
  code: string | null;
  message: string | null;
  data: boolean | null;
};

async function checkJoinedAPI(contestID: string): Promise<Response> {
  try {
    const response = (await (
      await apiService("GET", `/contest/${contestID}/participant/joined`, {}, {})
    ).data) as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

export { checkJoinedAPI, Response };

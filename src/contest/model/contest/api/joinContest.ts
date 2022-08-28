import apiService from "../../../helper/apiService";

type Response = {
  code: string | null;
  message: string | null;
  data: string | null;
};

async function joinContestAPI(contestID: string): Promise<Response> {
  try {
    const response = (await (
      await apiService("POST", `/contest/${contestID}/join`, {}, {})
    ).data) as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

export { Response, joinContestAPI };

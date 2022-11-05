import apiService from "../../../helper/apiService";
import { Participant } from "../participant";
import { ProblemScore } from "../problemScore";

type Request = {
  contestId: string;
};

type Response = {
  code: string | null;
  message: string;
  data: number;
};

async function countParticipantsAPI(request: Request): Promise<Response> {
  try {
    const response = (
      await apiService(
        "GET",
        `/contest/${request.contestId}/participant/count`,
        {},
        {}
      )
    ).data as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

export { countParticipantsAPI };

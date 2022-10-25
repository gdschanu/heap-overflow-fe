import apiService from "../../../helper/apiService";
import { Participant } from "../participant";
import { ProblemScore } from "../problemScore";

type Request = {
  contestId: string;
  page: number;
  perPage: number;
};

type Response = {
  code: string | null;
  message: string;
  data: participantsData | null;
};

type participantsData = Array<{
  version: number;
  coderId: string;
  rank: number | undefined;
  problemScores: ProblemScore[];
  contestId: string;
  createdAt: string;
  username: string;
}>;

async function getParticipantsAPI(request: Request): Promise<Response> {
  try {
    const response = (
      await apiService(
        "GET",
        `/contest/${request.contestId}/participant`,
        { page: request.page, perPage: request.perPage },
        {}
      )
    ).data as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

export { Request, Response, getParticipantsAPI };

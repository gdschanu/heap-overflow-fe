import apiService from "../../../helper/apiService";
import { Problem } from "../problem";

type Request = {
  page: number;
  perPage: number;
};

type Response = {
  code: string | null;
  message: string;
  data: contestData | null;
};

type contestData = Array<{
  id: string;
  version: number;
  name: string;
  description: string;
  startAt: string;
  endAt: string;
  createdBy: string;
  problems: Problem[];
}>;

async function searchContestAPI(request: Request): Promise<Response> {
  try {
    const response = (await apiService("GET", "/contest/contest", request, {}))
      .data as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

export { Request, Response, searchContestAPI };

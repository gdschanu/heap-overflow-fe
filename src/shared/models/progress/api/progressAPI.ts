import errorHandler from "@/shared/helpers/errorHandler";
import apiService from "../../../helpers/apiService";

type Response = {
  code: string | null;
  message: string | null;
  data: progressList | null;
};

type progressList = Array<{
  difficulty: string | null;
  done: number | null;
  problems: number | null;
  percentage: number | null;
}>;

async function getProgressAPI(): Promise<Response> {
  try {
    const response = (
      await apiService("GET", "/practiceProblem/problem/progress", {}, {})
    ).data as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

export { getProgressAPI };

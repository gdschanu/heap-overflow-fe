import apiService from "../../../helpers/apiService";

type Response = {
  code: string | null;
  message: string | null;
  data: progressList | null;
};

type progressList = Array<{
  difficulty: string;
  done: number;
  problems: number;
  percentage: number;
}>;

export default async function getProgress(): Promise<Response> {
  const response = (
    await apiService("GET", "/practiceProblem/problem/progress", {}, {})
  ).data as Response;
  return response;
}

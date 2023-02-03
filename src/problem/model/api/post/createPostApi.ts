import apiService from "@/shared/helpers/apiService";

export interface Req {
  title: string;
  content: string;
}

export interface Resp {
  code: string,
  message: string,
  data: string
}

export async function createPostApi(problemId : string, req : Req) :Promise<Resp> {
  const resp : any = await apiService('POST', `/practiceProblem/problem/${problemId}/post`, {}, req);
  return resp.data
}
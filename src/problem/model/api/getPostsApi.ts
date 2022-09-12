import apiService from "@/problem/helpers/apiService";
import DateTime from "@/shared/models/dateTime";

interface Resp {
  code : string;
  message : string;
  data : GetPostsResp[];
}

export interface GetPostsResp {
   title : string;
   author: string;
   createdAt: string;
   updatedAt: string;
   content: string;
};

export async function getPostsApi(page : number, perPage: number, problemId : string) : Promise<GetPostsResp[]> {
  try {
    const qs = `?page=${page}&perPage=${perPage}`
    const response : Resp = (await apiService('GET', `/practiceProblem/${problemId}/post` + qs)).data as Resp
    return response.data
  } catch (e) {
    throw e
  }
}

export async function countPostsApi(problemId : string) {
  try {
    const response = (await apiService('GET', `/practiceProblem/${problemId}/post/count`)).data
    return response.data
  } catch (e) {
    throw e
  }
}
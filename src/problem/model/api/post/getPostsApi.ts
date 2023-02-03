import apiService from "@/shared/helpers/apiService";
import DateTime from "@/shared/models/dateTime";

interface Resp {
  code : string;
  message : string;
  data : GetPostsResp[];
}

export interface GetPostsResp {
   id : string
   title : string;
   author: string;
   createdAt: string;
   updatedAt: string;
   content: string;
};

export async function getPostsApi(page : number, perPage: number, problemId : string) : Promise<GetPostsResp[]> {
    const qs = `?page=${page}&perPage=${perPage}`
    const response : Resp = (await apiService('GET', `/practiceProblem/problem/${problemId}/post` + qs)).data as Resp
    return response.data
}

export async function countPostsApi(problemId : string) {
    const response = (await apiService('GET', `/practiceProblem/problem/${problemId}/post/count`)).data
    return response.data
}
import { assert } from "@vue/compiler-core";
import apiService from "../../../helper/apiService";

type Response = {
  code: string | null;
  message: string | null;
  data: string | null;
};

async function countContestAPI(): Promise<Response> {
  try {
    const response = (await apiService("GET", "/contest/count", {}, {}))
      .data as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

export { Response, countContestAPI };

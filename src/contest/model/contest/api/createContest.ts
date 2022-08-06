import { assert } from "@vue/compiler-core";

import apiService from "../../../helper/apiService";

type Request = {
  name: string;
  description: string;
  startAt: string;
  endAt: string;
};

type Response = {
  code: string | null;
  message: string | null;
  data: string | null;
};

async function createContestAPI(request: Request): Promise<Response> {
  try {
    const response = (await apiService("POST", "/contest/contest", {}, request))
      .data as Response;
    return response;
  } catch (error) {
    throw error;
  }
}

export { Request, Response, createContestAPI };

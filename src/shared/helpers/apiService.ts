import axios from "axios";

const api = process.env.VUE_APP_API;

export default async function (
  method: string,
  address: string,
  params: any,
  body: any
) {
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "Application/json",
    "access-token": `${accessToken}`,
    "Access-Control-Allow-Origin": "*",
  };
  try {
    const response = await axios({
      method,
      url: `${api}${address}`,
      params,
      data: body,
      headers,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

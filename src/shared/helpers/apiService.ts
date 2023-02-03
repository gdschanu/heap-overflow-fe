import axios from "axios";

const api = process.env.VUE_APP_API;

export default async function (
  method: string,
  address: string,
  params?: any,
  body?: any,
  customHeaders?: any
) {
  const accessToken = localStorage.getItem("accessToken");
  let headers = {
    "Content-Type": "Application/json",
    "Access-Control-Allow-Origin": "*",
    ...customHeaders,
  };
  if (accessToken) {
    headers["access-token"] = `${accessToken}`;
  }
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

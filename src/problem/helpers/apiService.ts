import axios, { AxiosError } from 'axios';

const api = `${process.env.VUE_APP_API}`; //base url

// VD: apiService("GET", "/api/getUser", "{id: 3j8T46Yc7J3d4DS30K}");
export default async function (method: string, address: string, params?: object, body?: object) {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'Application/json',
        'access-token': `${accessToken}`,
        'Access-Control-Allow-Origin': '*'
    };
    try {
        const response = await axios({
            method,
            url: `${api}${address}`,
            params,
            data: body,
            headers
        });
        return response;
    } catch (error) {
        const err = error as AxiosError
        throw err;
    };
    
};
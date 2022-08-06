import router from "@/shared/router";
import store from "@/shared/store";
import { AxiosError } from "axios";
import ResponseForm from './response'

function showAlert(message: string) {
    store.dispatch("setAlert", {
        isAlert: true,
        message: message,
        type: "error",
    })
}

export default function(error: AxiosError) {
    
    if (error.response) {
        const response = error.response;
        const data = response.data as ResponseForm;
        console.log(data);
        
        // unauthenticated
        if (response.status === 401) {
            localStorage.removeItem('accessToken')
            return router.push("/login");
        };
        // forbidden
        if (response.status === 403) {
            localStorage.removeItem('accessToken')
            return router.push("/forbidden"); // chưa làm
        };
        if (data)
            return showAlert(data.message)

    };
    // unknown error
    showAlert(error.message);
    console.log(error);
};
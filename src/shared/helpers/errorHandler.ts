import router from "@/shared/router";
import store from "@/shared/store";
import { AxiosError } from "axios";

interface ResponseForm {
    code: number
    message: '',
    data: any,
    error?: any
}

function showAlert(message: string) {
    store.dispatch("setAlert", {
        isAlert: true,
        message: message,
        type: "error",
    })
}

export default function(error: unknown) {
    if (error instanceof AxiosError && error.response) {
        const response = error.response;
        const data = response.data as ResponseForm;
        console.log(data);
        
        // unauthenticated
        if (response.status === 401) {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('coderId')
            return router.push({
                name: 'Login',
                query: {
                    redirect: router.currentRoute.value.fullPath
                }
            });
        };
        if (data)
            return showAlert(data.message)

    } else if (error instanceof Error) {
        showAlert(error.message);    
    } else {
        showAlert('Something went wrong, Please try again later');
        console.log(error);
    }
};
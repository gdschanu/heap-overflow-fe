import { RouteLocationNormalizedLoaded } from "vue-router";
import router from "../router";

export function protectPrivateRoute(to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) {
    const accessToken = localStorage.getItem("accessToken")
    if (!accessToken) {
        return router.push({
            name: 'Login',
            query: {
                redirect: to.fullPath
            }
        })
    }
}

export function protectAuthRoute(to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
        return '/dashboard'
    }
}
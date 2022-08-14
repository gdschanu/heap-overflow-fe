import { RouteLocationNormalizedLoaded } from "vue-router";
import router from "../router";

export default function routerWatcher(to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) {
    const accessToken = localStorage.getItem("accessToken");
    
    if (to.meta.type === 'protected' && !accessToken)
        return router.push({ name: "Login" });

    if (to.meta.type === "auth" && accessToken)
        return router.push({ name: "Dashboard" });
}
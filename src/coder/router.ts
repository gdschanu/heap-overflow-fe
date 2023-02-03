import { protectAuthRoute } from "@/shared/helpers/routerGuard";
import { RouteLocationNormalizedLoaded } from "vue-router";

export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/coder/view/Login.vue"),
        beforeEnter(to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) {
            return protectAuthRoute(to, from)
		}
    },
    {
        path: '/register',
        name: 'Register',
        component:  () => import("@/coder/view/Register.vue"),
        beforeEnter(to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) {
            return protectAuthRoute(to, from)
		}
    },
    {
        path: '/admin',
        name: 'AdminLogin',
        component:  () => import("./view/AdminLogin.vue")
    },
    {
        path: '/AdminDashboard',
        name: 'AdminDashboard',
        component:  () => import("./view/AdminDashboard.vue")
    }
]

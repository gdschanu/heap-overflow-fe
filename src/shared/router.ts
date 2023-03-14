import { createRouter, createWebHistory, RouteLocationNormalizedLoaded, RouteRecordRaw } from "vue-router";
import problemRouter from "@/problem/router";
import coderRouter from "@/coder/router";
import contestRouter from "@/contest/router";
import blogRouter from "@/blog/router";
import { protectPrivateRoute } from "./helpers/routerGuard";

let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Landing",
    redirect: '/dashboard'
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/shared/views/Dashboard.vue"),
    // beforeEnter(to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) {
    //   return protectPrivateRoute(to, from)
		// },
    meta: {
      layout: 'NavSideBar'
    }
  },
  {
    path: "/:error",
    name: "Error",
    component: () => import("@/shared/views/Error.vue"),
  },
];

routes = [
  ...routes,
  ...blogRouter,
  ...coderRouter,
  ...problemRouter,
  ...contestRouter,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

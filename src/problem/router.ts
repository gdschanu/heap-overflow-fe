import { protectPrivateRoute } from "@/shared/helpers/routerGuard";
import { RouteLocationNormalizedLoaded } from "vue-router";

export default [
  {
    path: "/problem",
    name: "Problem",
    component: () => import("./components/problems/Problems.vue"),
    // beforeEnter(to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) {
    //   return protectPrivateRoute(to, from)
		// },
    meta: {
      layout: 'NavSideBar'
    }
  },
  {
    path: "/problem/:id",
    name: "ProblemDetail",
    component: () => import("./components/detail/Problem.vue")
  },
  {
    path: "/problem/create",
    name: "problemCreate",
    component: () => import("./components/sysadmin/problemCreate/createPracticProblem.vue"),
  },

  {
    path: "/problem/:id/testCase",
    name: "testCase",
    component: () => import("./components/sysadmin/problemCreate/createTestCase.vue"),
  },
];

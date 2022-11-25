export default [
  {
    path: "/problem",
    name: "Problem",
    component: () => import("./components/list/ProblemList.vue"),
    meta: {
      type: "protected",
    },
  },
  {
    path: "/problem/:id",
    name: "ProblemDetail",
    component: () => import("./components/detail/Problem.vue"),
    meta: {
      type: "protected",
    },
  },

  // test create practice problem
  {
    path: "/problem/create",
    name: "problemCreate",
    component: () => import("./components/sysadmin/problemCreate/createPracticProblem.vue"),
    meta: {
      type: "protected",
    },
  },

  {
    path: "/problem/:id/testCase",
    name: "testCase",
    component: () => import("./components/sysadmin/problemCreate/createTestCase.vue"),
    meta: {
      type: "protected",
    },
  },
];

export default [
  // example:
  {
    path: "/contest",
    name: "Contest",
    component: () => import("./components/ListContests.vue"), //paste the component needed
    meta: {
      type: "protected",
    },
  },

  {
    path: "/contest/:id",
    name: "ContestDetail",
    component: () => import("./components/ContestDetail.vue"),
    meta: {
      type: "detail",
    },
  },
];

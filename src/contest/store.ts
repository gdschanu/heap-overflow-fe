import { createStore } from "vuex";
import { Contest } from "./model/contest/contest";

export interface State {
  contest: Contest;
}

export default createStore({
  state: {
    contest: {},
  } as State,

  mutations: {
    setContest(state, contest: Contest) {
      state.contest = contest;
    },
  },

  actions: {
    setContest(state, contest: Contest) {
      state.commit("setContest", contest);
    },
  },
});

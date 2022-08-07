export default {
  namespaced: true,
  state() {
    // cách dùng: this.$store.state.endUser.info
    // hoặc dùng với mapState.
    return {
      user: {}
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    // cách dùng: this.$store.dispatch("endUser/setCurrentUser");
    // hoặc dùng với mapActions: mapActions: { initInfo: "endUser/setCurrentUser", }
    setUser(state, user) {
      state.commit("setUser", user);
    },
  },
  getters: {
    // khi muốn lấy state và tính toán dài, viết hàm ở đây. Dùng như state.
  },
};

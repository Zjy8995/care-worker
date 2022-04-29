import { createStore } from "vuex";

export default createStore({
  state: {
    isCollapse: false,
    curOlderId: "",
    curOlderAvatar: "",
    userInfo: {
      phone: "",
      name: "",
      role: "",
    },
  },
  getters: {},
  mutations: {
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },

    setCurOlderId(state, id) {
      state.curOlderId = id;
    },

    setCurOlderAvatar(state, url) {
      state.curOlderAvatar = url;
    },

    setUserInfo(state, user) {
      state.userInfo = { ...user };
    },

    removeUserInfo(state) {
      state.userInfo = {
        phone: "",
        name: "",
        role: "",
      };
    },
  },
  actions: {},
  modules: {},
});

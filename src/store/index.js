import { createStore } from "vuex";

export default createStore({
  state: {
    isCollapse: false,
    curOlderId: "",
    curOlderName: "",
    curOlderAvatar: "",
    userInfo: {
      phone: "",
      name: "",
      role: "",
    },
    nursingList: [],
  },
  getters: {},
  mutations: {
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },

    setCurOlderId(state, id) {
      state.curOlderId = id;
    },
    setCurOlderName(state, name) {
      state.curOlderName = name;
    },

    setCurOlderAvatar(state, url) {
      state.curOlderAvatar = url;
    },
    setNursingList(state, list) {
      state.nursingList = list;
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

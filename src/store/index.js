import { createStore } from 'vuex'

export default createStore({
  state: {
    isCollapse: false,
    userInfo: {
      phone: '',
      name: '',
      role: ''
    }
  },
  getters: {
  },
  mutations: {
    changeCollapse (state) {
      state.isCollapse = !state.isCollapse
    },

    setUserInfo(state, user) {
      state.userInfo = { ...user }
    },

    removeUserInfo(state) {
      state.userInfo = {
        phone: '',
        name: '',
        role: ''
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

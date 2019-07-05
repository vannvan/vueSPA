export default {
  state: {
    npmList:undefined
  },
  mutations: {
    setNpmList (state, newV) {
      state.npmList = newV;
    },
  }
}

const state = {
  directory: ''
}

const mutations = {
  SET_DIRECTORY (state, d) {
    state.directory = d
  }
}

const actions = {
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

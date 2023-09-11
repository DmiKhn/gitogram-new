import * as api from '../../api'

export const trendings = {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_TRENDINGS: (state, trendings) => {
      state.data = trendings
    },
    SET_README: (state, payload) => {
      state.data.trendings = state.data.trendings.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  getters: {
    getRepoById: (state) => (id) => state.data.trendings.find((item) => item.id),
    allState: (state) => state.data.trendings
  },
  actions: {
    async fetchTrendings ({ state, commit, rootState }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', {
           trendings: data.items
        })
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async fetchReadme ({ getters }, { commit }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}

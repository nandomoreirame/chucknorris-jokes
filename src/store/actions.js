import axios from 'axios'

export default {
  fetchJoke ({ commit }) {
    axios.get('https://api.chucknorris.io/jokes/random').then(response => {
      commit('FETCH_JOKE', response.data.value)
    })
  },

  changeShareLink ({ commit }, payload) {
    commit('CHANGE_SHARE_LINK', payload)
  },

  changeLoading ({ commit }, payload) {
    commit('IS_LOADING', payload)
  },

  changePageTitle ({ commit }, payload) {
    commit('CHANGE_PAGETITLE', payload)
  }
}

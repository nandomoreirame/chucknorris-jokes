import axios from 'axios'

export default {
  fetchJoke (context) {
    axios.get('https://api.chucknorris.io/jokes/random').then(response => {
      context.commit('FETCH_JOKE', response.data.value)
    })
  },
  changeShareLink (context, payload) {
    context.commit('CHANGE_SHARE_LINK', payload)
  },
  changeLoading (context, payload) {
    context.commit('IS_LOADING', payload)
  },
  changePageTitle (context, payload) {
    context.commit('CHANGE_PAGETITLE', payload)
  }
}

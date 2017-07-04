export default {
  'FETCH_JOKE' (state, payload) {
    state.loading = false
    state.joke = payload
  },
  'CHANGE_SHARE_LINK' (state, payload) {
    state.shareLink = payload
  },
  'IS_LOADING' (state, payload) {
    state.loading = payload
  },
  'CHANGE_PAGETITLE' (state, payload) {
    state.pageTitle = payload
  }
}

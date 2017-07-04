<script>
import { mapActions } from 'vuex'
export default {
  name: 'cnButton',
  methods: {
    refreshChuckJoke () {
      this.changeLoading(true)
      this.fetchJoke()
    },
    ...mapActions(['changeLoading', 'fetchJoke'])
  }
}
</script>

<template lang="html">
  <button @click="refreshChuckJoke" class="refresh-button" role="button">
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.89 2.628C13.358.985 11.168 0 8.76 0 3.94 0 0 3.942 0 8.76c0 4.817 3.942 8.758 8.76 8.758 4.05 0 7.444-2.847 8.43-6.57h-2.3c-.876 2.52-3.284 4.38-6.13 4.38-3.614 0-6.57-2.956-6.57-6.57 0-3.612 2.956-6.568 6.57-6.568 1.86 0 3.393.766 4.598 1.97L9.854 7.665h7.664V0L14.89 2.628z" fill="#A69898"/>
    </svg>
  </button>
</template>

<style scoped>
</style>

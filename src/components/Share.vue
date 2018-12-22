<template lang="html">
  <div v-if="shareLink">
    <a :href="shareLink" v-show="!isLoading" class="share" target="_blank">
      <svg width="26" height="35" viewBox="0 0 26 35" xmlns="http://www.w3.org/2000/svg">
        <g fill="#42b983">
          <path d="M18.3 8.7L13 3.4 7.7 8.7 6.3 7.3 13 .6l6.7 6.7"/>
          <path d="M12 2h2v21h-2"/>
          <path d="M23 35H3c-1.7 0-3-1.3-3-3V14c0-1.7 1.3-3 3-3h7v2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V14c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"/>
        </g>
      </svg>
      <span>{{shareText}}</span>
    </a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'cnShare',
  computed: {
    ...mapState({
      shareLink: state =>  state.shareLink,
      isLoading: state =>  state.loading,
      shareText: state =>  state.shareText
    })
  }
}
</script>

<style scoped>
.share span,
.share svg {
  display: inline-block;
  vertical-align: bottom;
}
</style>

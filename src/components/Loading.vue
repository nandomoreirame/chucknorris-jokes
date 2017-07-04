<script>
export default {
  name: 'cnLoading',
  computed: {
    isLoading () {
      return this.$store.state.loading
    },
    loadingText () {
      return this.$store.state.loadingText
    }
  }
}
</script>

<template lang="html">
  <div>
    <div v-show="isLoading" class="loading">{{loadingText}}</div>
  </div>
</template>

<style scoped>
</style>

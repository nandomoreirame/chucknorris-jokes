<script>
import { mapState } from 'vuex'
export default {
  name: 'cnPageTitle',
  computed: {
    ...mapState({
      pageTitle: state => state.pateTitle
    })
  }
}
</script>

<template lang="html">
  <h1 class="title">{{pageTitle}}</h1>
</template>

<style scoped>
.title {
  margin: 30px auto;
  font-size: 2.4rem;
  font-weight: 700;
}
</style>

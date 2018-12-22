<template lang="html">
  <div id="app">
    <div class="centered">
      <cn-thumb></cn-thumb>
      <cn-page-title></cn-page-title>
      <cn-joke></cn-joke>
      <cn-footer></cn-footer>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { mapActions } from 'vuex'

import CnJoke from './components/Joke.vue'
import CnThumb from './components/Thumb.vue'
import CnPageTitle from './components/PageTitle.vue'
import CnFooter from './components/Footer.vue'

Vue.prototype.$http = axios

export default {
  name: 'app',
  components: {
    CnJoke,
    CnThumb,
    CnPageTitle,
    CnFooter
  },
  mounted () {
    this.changeLoading(true)
  },
  methods: {
    ...mapActions(['changeLoading'])
  }
}
</script>

<style>
@import url('//fonts.googleapis.com/css?family=Open+Sans:400,700');

html, body, #app {
  width: 100%;
  height: 100%;
}

html {
  font-size: 16px;
  box-sizing: border-box;
}

*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  background-color: #34404d;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  letter-spacing: .02rem;
  color: #34404d;
  padding: .625rem /* 10/16 */;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app {
  padding: 5em 1em;
  display: table;
  background-color: #f8f8f8;
}

.centered {
  display: table-cell;
  vertical-align: middle;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>

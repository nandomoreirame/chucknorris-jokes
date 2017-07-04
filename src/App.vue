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

<template lang="html">
  <div id="app">
    <cn-thumb></cn-thumb>
    <cn-page-title></cn-page-title>
    <cn-joke></cn-joke>
    <cn-footer></cn-footer>
  </div>
</template>

<style>
@import url('//fonts.googleapis.com/css?family=Open+Sans:400,700');
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
  background-color: #f8f8f8;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  letter-spacing: .02rem;
  color: #34404d;
  border: 5px solid #34404d;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app {
  padding: 5em 1em;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>

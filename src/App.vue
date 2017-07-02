<template>
  <div id="app">
    <div class="thumb">
      <img src="./dist/assets/chucknorris.png">
    </div>
    <h1 class="title">{{pageTitle}}</h1>
    <div class="joke">
      <p v-show="!loading">👊🏼 {{joke.value}} 👊🏼</p>
      <div v-show="loading" class="loading">{{loadingText}}</div>
      <button @click="refreshChuckJoke" class="refresh-button" role="button">
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.89 2.628C13.358.985 11.168 0 8.76 0 3.94 0 0 3.942 0 8.76c0 4.817 3.942 8.758 8.76 8.758 4.05 0 7.444-2.847 8.43-6.57h-2.3c-.876 2.52-3.284 4.38-6.13 4.38-3.614 0-6.57-2.956-6.57-6.57 0-3.612 2.956-6.568 6.57-6.568 1.86 0 3.393.766 4.598 1.97L9.854 7.665h7.664V0L14.89 2.628z" fill="#A69898"/>
        </svg>
      </button>
    </div>
    <a class="share" :href="shareURL" target="_blank">
      <svg width="26" height="35" viewBox="0 0 26 35" xmlns="http://www.w3.org/2000/svg">
        <g fill="#42b983">
          <path d="M18.3 8.7L13 3.4 7.7 8.7 6.3 7.3 13 .6l6.7 6.7"/>
          <path d="M12 2h2v21h-2"/>
          <path d="M23 35H3c-1.7 0-3-1.3-3-3V14c0-1.7 1.3-3 3-3h7v2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V14c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"/>
        </g>
      </svg>
      <span>{{shareText}}</span>
    </a>

    <p class="copy">Make by <a :href="links.makebyURL" target="_blank">{{ humanizeURL(links.makebyURL) }}</a> using <a :href="links.vuejsURL" target="_blank">{{ humanizeURL(links.vuejsURL) }}</a> and <a :href="links.chucknorrisURL" target="_blank">{{ humanizeURL(links.chucknorrisURL) }}</a></p>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios

export default {
  name: 'app',
  data: function () {
    return {
      joke: [],
      pageTitle: "Chuck Norris jokes",
      loading: false,
      shareText: 'Chuck Norris ordered you to share this Joke!',
      shareURL: 'https://twitter.com/share',
      shareHashtags: 'chucknorris,chucknorrisjoke',
      loadingText: 'Chuck Norris ordered you to wait...',
      links: {
        makebyURL: 'https://nandomoreira.me/',
        vuejsURL: 'https://vuejs.org/',
        chucknorrisURL: 'https://api.chucknorris.io',
      }
    }
  },
  created () {
    document.title = `${this.pageTitle} - by ${this.links.makebyURL}`;
  },
  mounted() {
    this.loading = true
    this.updateJoke()
  },
  methods: {
    humanizeURL(url) {
      return url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')
    },
    updateShareURL(value) {
      let url = encodeURI(`${window.location.href}`)
      let text = encodeURI(`${value}`)
      return `${this.shareURL}?url=${url}&text=${text}&hashtags=${this.shareHashtags}&via=umdevux`
    },
    updateJoke () {
      this.$http.get('https://api.chucknorris.io/jokes/random').then(response => {
        this.joke = response.data
        this.shareURL = this.updateShareURL(response.data.value)
        this.loading = false
      })
    },
    refreshChuckJoke (event) {
      if (event) {
        this.loading = true
        this.updateJoke()
      }
    }
  }
}
</script>

<style>
@import url('//fonts.googleapis.com/css?family=Open+Sans:400,700');

html, body {
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
  background-color: #f8f8f8;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  letter-spacing: .02rem;
  color: #34404d;
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

.title {
  margin: 30px auto;
  font-size: 2.4rem;
  font-weight: 700;
}

.joke {
  max-width: 620px;
  background-color: #fff;
  box-shadow: 0 -2px 17px 0 rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  margin: 30px auto;
  padding: 30px;
  position: relative;
}

.joke p {
  font-size: 1.2rem;
  line-height: 1.4;
  margin: 0;
}

.share span,
.share svg {
  display: inline-block;
  vertical-align: bottom;
}

.refresh-button {
  border: none;
  cursor: pointer;
  background: none transparent;
  padding: 0;
  margin: 0;
  position: absolute;
  right: 10px;
  top: 10px;
}

.loading {
  text-align: center;
  font-size: .8rem;
  font-weight: 700;
}

.loading::before {
  content: '';
  display: block;
  width: 32px;
  height: 32px;
  clear: both;
  margin: 20px auto;
  border: 4px rgba(0, 0, 0, 0.25) solid;
  border-top: 4px rgba(0, 0, 0, 1) solid;
  border-radius: 50%;
  -webkit-animation: spCircRot .6s infinite linear;
  animation: spCircRot .6s infinite linear;
}
@-webkit-keyframes spCircRot {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(359deg); }
}
@keyframes spCircRot {
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
}

.copy {
  position: fixed;
  bottom: 10px;
  width: 100%;
  font-size: 12px;
  z-index: 100;
}

.copy a {
  text-decoration: underline;
}

.copy a:hover {
  text-decoration: none;
}
</style>

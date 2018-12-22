<template lang="html">
  <div>
    <div class="joke">
      <cn-button></cn-button>
      <p v-show="!isLoading">👊🏼 {{joke}} 👊🏼</p>
      <cn-loading></cn-loading>
    </div>
    <cn-share></cn-share>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CnButton from './Button.vue'
import CnLoading from './Loading.vue'
import CnShare from './Share.vue'
export default {
  name: 'cnJoke',
  components: {
    CnButton,
    CnShare,
    CnLoading
  },
  mounted () {
    this.changeLoading(true)
    this.fetchJoke()
  },
  methods: {
    ...mapActions(['changeLoading', 'fetchJoke', 'changeShareLink']),
    updateShareLink (joke) {
      const { shareHashtags } = this.$store.state
      const { baseShareLink } = this.$store.state.links
      let url = encodeURI(`${window.location.href}`)
      let text = encodeURI(`${joke}`)
      console.log(`${baseShareLink}?url=${url}&text=${text}&hashtags=${shareHashtags}&via=oseunando`)
      this.changeShareLink(`${baseShareLink}?url=${url}&text=${text}&hashtags=${shareHashtags}&via=oseunando`)
    }
  },
  beforeUpdate () {
    this.updateShareLink(this.$store.state.joke)
  },
  computed: {
    ...mapState({
      joke: state => state.joke,
      isLoading: state => state.loading
    })
  }
}
</script>

<style scoped>
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

</style>

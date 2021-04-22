import Vue from 'vue'
import axios from 'axios'

// Vue.prototype.$axios = axios

export default ({ store, Vue }) => {
  Vue.prototype.$axios = axios
  store.$axios = axios
}
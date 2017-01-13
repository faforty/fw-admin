import Vue from 'vue'
import VueResource from 'vue-resource'
import VueValidate from 'vee-validate';
import store from './vuex/store'
import router from './router/'
import { sync } from 'vuex-router-sync'

sync(store, router)

import App from './App.vue'

Vue.use(VueValidate)
Vue.use(VueResource)

if (typeof FwAdmin != 'object') {
  alert('ERROR! The object "FwAdmin" is not declared!');
}

const Fw = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

export {Fw, router, store}

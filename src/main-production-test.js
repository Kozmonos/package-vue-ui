import Vue from 'vue'
import BuildTest from './production.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(BuildTest),
}).$mount('#app')
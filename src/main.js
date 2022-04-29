import Vue from 'vue'
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./main.scss";

import Demo from './Demo.vue'
console.log("development")
new Vue({
  render: h => h(Demo),
}).$mount('#app')
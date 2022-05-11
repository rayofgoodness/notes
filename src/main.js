import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import index from './router';
import store from "@/store/store";


Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  store,
  router: index,
  render: h => h(App),
}).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
const router=new VueRouter({
	mode:'history',
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

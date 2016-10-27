// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const routes = [
  { path: '/home', name: 'home', component: require('./components/Home') },
  { path: '/join', name: 'join', component: require('./components/Join') },
  { path: '/about', name: 'about', component: require('./components/About') },
  { path: '/party', name: 'party', component: require('./components/Party') },
  { path: '/', redirect: '/home' },
  { path: '*', component: require('./components/NotFound') }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')

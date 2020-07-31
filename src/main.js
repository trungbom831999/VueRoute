import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import $ from 'jquery'
// import VueRouter from 'vue-router';

Vue.config.productionTip = false;

// const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

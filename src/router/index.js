import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
// import Register from '../components/Register.vue'
// import Login from '../components/Login.vue'
// import People from '../components/People.vue'
// import Redirect from '../components/Redirect.vue'
// import Error from '../components/Error.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register', 
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../components/Register.vue')
  },
  {
    path: '/login', 
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue')
  },
  {
    path: '/redirect', 
    name: 'Redirect',
    component: () => import(/* webpackChunkName: "redirect" */ '../components/Redirect.vue')
  },
  {
    path: '/people/:name/:pass', 
    name: 'People',
    component: () => import(/* webpackChunkName: "people" */ '../components/People.vue')
  },
  {
    path: '/404', 
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../components/Error.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import(/* webpackChunkName: "welcome" */ '../components/Welcome.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/user/name=:name/pass=:password/bd=:birthday/sex=:sex/level=:level/email=:email/phone=:phone/des=:des',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../components/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.user){
      next({
        name: "login"
      });
    }
    else{
      next();
    }
  }else{
    next();
  }
});

export default router;

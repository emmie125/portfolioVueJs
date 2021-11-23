import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  offset: 500,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/skill',
    name: 'skill',
    // route level code-splitting
    // this generates a separate chunk (skill.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "skill" */ '../views/Skills.vue'),
  },
];
// const scrollTo = scrollBehavior (to, from, savedPosition);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

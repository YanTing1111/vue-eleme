// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let routes = [
  {path: '/', name: 'index', component: App, 
  children: [
    {path: '/goods', component: goods}, 
    {path: '/ratings', component: ratings}, 
    {path: '/seller', component: seller}
  ]
}
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
  routes
});

// const app = new Vue({
//   router
// }).$mount('#app')

// router.start(app, '#app');

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
//   router
// })
let app = new Vue({
  router
}).$mount('#app');
  router.push('/goods');
export default app;

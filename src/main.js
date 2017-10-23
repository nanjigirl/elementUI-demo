import Vue from 'vue'
import VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
// var VueResource = require('../node_modules/vue-resource');
var Element = require('element-ui');
require('element-ui/lib/theme-default/index.css');
require('./assets/iconfont/iconfont.css');
require('./assets/css/cssInit.css');

import App from './App.vue'
import routerConfig from './router.config.js'
import axios from 'axios'
import store from './store.js'
window.moment = require('moment');
Vue.prototype.axios = axios;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);

const router = new VueRouter(routerConfig);

new Vue({
    router: router,
    store:store,
    render: h => h(App)
}).$mount('#app');

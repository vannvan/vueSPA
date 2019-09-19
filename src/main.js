// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';
import "babel-polyfill";
import store from '@/store/main.js';

import mixins from '@/components/common/mixins'
Vue.mixin(mixins)

import directive from '@/components/common/directive'
Vue.use(directive)

import WUI from '../packages/index'
import './wui-theme/src/index.scss'
Vue.use(WUI)

import lottie from 'vue-lottie';
Vue.component('lottie', lottie)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

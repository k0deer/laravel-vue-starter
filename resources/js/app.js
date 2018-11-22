require('./bootstrap');

import Vue from 'vue'
import axios from 'axios'
import router from './routes/index'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import { APIENDPOINT } from './app.config.js'

window.Vue = Vue
window.eventBus = new Vue()

Vue.use(VueRouter)
Vue.use(axios)
Vue.use(Meta)

axios.defaults.baseURL = APIENDPOINT;

const app = new Vue({
    el: '#app',
    router
});

require('./bootstrap');

import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import {routes} from './routes/index'
import Meta from 'vue-meta'
import { APIENDPOINT } from './app.config.js'
import store from './store/index'
import { initialize } from './helpers/general';

window.Vue = Vue
window.eventBus = new Vue()

Vue.use(VueRouter)
Vue.use(axios)
Vue.use(Meta)

axios.defaults.baseURL = APIENDPOINT;

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

initialize(store, router);


const app = new Vue({
    el: '#app',
    router,
    store
});

require('./bootstrap');

import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import { APIENDPOINT } from './app.config.js'
import {routes} from './routes/index'
import Meta from 'vue-meta'
import VeeValidate from 'vee-validate'
import VueValidationEs from 'vee-validate/dist/locale/es';
import store from './store/index'
import Api from './services/api.js';

import { initialize } from './helpers/general';

window.Vue = Vue
window.eventBus = new Vue()
window.api = new Api();


Vue.use(VueRouter)
Vue.use(axios)
Vue.use(Meta)
Vue.use(VeeValidate, {
    locale: 'es',
    dictionary: {
        es: VueValidationEs
    }
})

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

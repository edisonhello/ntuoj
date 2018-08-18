import "babel-polyfill"

import Vue from 'vue'

import Login from './components/login.vue'

let login = new Vue({
    el: '#v-login',
    components: { Login }
})

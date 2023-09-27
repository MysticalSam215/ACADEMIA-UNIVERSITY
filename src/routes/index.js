import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from "./components/LandingPage"
import Aboutus from "./components/About"
import Signupvue from "./components/Signupvue"
import LoginVue from "./components/LoginVue"

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'landingpage',
        components: LandingPage,
    }
]
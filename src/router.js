import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login",
                props:true
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent,
            props:true
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent,
            props:true
        }
    ]
})
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from 'vue-resource';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './style.scss'
import VueSession from 'vue-session'

//Vue.use(VueAxios, axios)
Vue.use(VueResource)
Vue.use(VueSession)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

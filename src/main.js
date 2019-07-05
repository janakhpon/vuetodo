import Vue from 'vue'
import VueAxios from "vue-axios";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@/assets/css/style.css";
import BootstrapVue from "bootstrap-vue";
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

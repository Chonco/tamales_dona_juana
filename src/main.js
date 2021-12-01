import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { getUserToken, isUserLoggedIn } from './auth/utils'

import App from './App.vue'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

const axiosInst = axios.create({
	baseURL: "http://localhost:3000",
});

axiosInst.interceptors.request.use((config) => {
	if (isUserLoggedIn()) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${getUserToken()}`,
		};
  }
  
  return config;
});

Vue.prototype.$EventBus = new Vue();

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axiosInst);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

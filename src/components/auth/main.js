import Vue from 'vue'
import VueCookies from 'vue-cookies'
import Login from './Login.vue'
import '@/registerServiceWorker'
import vuetify from '@/plugins/vuetify';
import '@/assets/scss/template/teacher/teacher.scss'
import store from '../../store'
Vue.config.productionTip = false
Vue.use(VueCookies)
new Vue({
  vuetify,
  store,
  render: h => h(Login)
}).$mount('#app')

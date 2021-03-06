import Vue from 'vue'
import App from './App.vue'
import '@/registerServiceWorker'
import vuetify from '@/plugins/vuetify';
import '@/assets/scss/template/teacher/teacher.scss'
import router from './router'
import store from '../../store'

Vue.config.productionTip = true

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

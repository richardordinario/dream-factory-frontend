import Vue from 'vue'
import App from './App.vue'
import '@/registerServiceWorker'
import vuetify from '@/plugins/vuetify';
import '@/assets/scss/template/teacher/teacher.scss'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
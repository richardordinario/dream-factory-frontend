import Vue from 'vue'
import Vuex from 'vuex'
Vue.config.devtools = true

Vue.use(Vuex)

import auth from './modules/Auth'

export default new Vuex.Store({
    modules:{
        auth,
    },
})

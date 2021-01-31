import Api from '../../apis'

const state = {
    auth: [],
    logged: false,
}
const getters = {
    getLogged: state => state.logged
}

const actions = {
    async Login({commit}, payload) {
        try {
            const res = await Api.auth.login(payload)
            console.log(res)
            commit('SET_AUTH', res.data.user)
            localStorage.setItem('token', res.data.access_token)
            if(payload.provider == 'teachers') {
                window.location.href = '/teacher/dashboard'
            }
        } catch (error) {
            console.log(error)
        }
    },
    async Logout({commit}, payload) {
        try {
            const res = await Api.auth.logout(payload)
            console.log(res)
            commit('SET_AUTH', false)
            localStorage.removeItem('token')
            window.location.href = '/'
        } catch (error) {
            console.log(error)
        }
    },
    async Authenticate({commit}, payload) {
        try {
            const res = await Api.auth.auth(payload)
            console.log(res)
            commit('SET_AUTH', res.data)
            commit('SET_LOGGED', true)
        } catch (error) {
            console.log(error)
            if(error) {
                commit('SET_LOGGED', false)
                localStorage.removeItem('token')
                window.location.href = '/login'
            }
            
        }
    },

}
 
const mutations = {
    SET_AUTH(state, payload) {
        state.auth = payload
    },
    SET_LOGGED(state, payload) {
        state.logged = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}


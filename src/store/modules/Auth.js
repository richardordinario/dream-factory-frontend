import Api from '../../apis'

const state = {
    auth: [],
    role: ''
}
const getters = {
    getRole: state => state.role
}

const actions = {
    async Login({commit}, payload) {
        try {
            const res = await Api.auth.login(payload)
            console.log(res)
            commit('SET_AUTH', res.data.user)
            commit('SET_ROLE', payload.provider)
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('role', payload.provider)
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
        } catch (error) {
            console.log(error)
            if(error) {
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                window.location.href = '/'
            }
            
        }
    },

}
 
const mutations = {
    SET_AUTH(state, payload) {
        state.auth = payload
    },
    SET_ROLE(state, payload) {
        state.role = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}


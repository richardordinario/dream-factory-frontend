import store from '../../store'

export default function teacher({next}) {
    console.log('middleware auht test')
    if(!localStorage.getItem('token')) {
        return window.location.href = '/login'
    }
    store.dispatch('auth/Authenticate', 'teachers')
    return next()
}
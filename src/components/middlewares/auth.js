import store from '../../store'

export default function auth({next}) {
    console.log('middleware auht test')
    if(!localStorage.getItem('token')) {
        //sreturn router.push('/login')
        return window.location.href = '/login'
    }
    store.dispatch('auth/Authenticate', localStorage.getItem('role'))
    return next()
}
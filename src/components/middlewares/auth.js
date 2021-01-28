export default function auth({next, router}) {
    console.log('middleware auht test')
    if(!localStorage.getItem('token')) {
        return router.push('/login')
        // return window.location.href = '/'
    }
    return next()
}
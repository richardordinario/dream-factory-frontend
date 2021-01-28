export default function guest({next, router}) {
    console.log('middleware auht test')
    if(localStorage.getItem('token')) {
        return router.push('/dashboard')
    }
    return next()
}
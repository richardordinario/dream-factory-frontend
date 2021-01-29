import Api from '../Api'

export default {
    register(form) {
        return Api().post('/api/admin/register',form)
    },
    login(form) {
        return Api().post('api/login',form)
    },
    logout(role) {
        return role == 'users' ? Api().get('/api/logout') : (role == 'teachers' ? Api().get('/api/teacher/logout') : Api().get('/api/admin/logout'))
    }, 
    auth(role) {
        return role == 'users' ? Api().get('/api/user') : (role == 'teachers' ? Api().get('/api/teacher/user') : Api().get('/api/admin/user'))
    }
}
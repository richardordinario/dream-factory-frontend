import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from '../pages/Dashboard.vue'
import Subject from '../pages/Subject.vue'
import Student from '../pages/Student.vue'
import Login from '../pages/Login.vue'
import Middlewares from '../../middlewares'


const routes = [
    { 
        path: '*', 
        redirect: '/' 
    },
    { 
        path: '/login', 
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        redirect: '/dashboard',
        meta: {
            middleware: [Middlewares.teacher]
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            middleware: [Middlewares.teacher]
        }
    },
    {
        path: '/courses',
        name: 'My Courses',
        component: Subject,
        meta: {
            middleware: [Middlewares.teacher]
        }
    },
    {
        path: '/students',
        name: 'My Students',
        component: Student,
        meta: {
            middleware: [Middlewares.teacher]
        }
    },
]

const router = new VueRouter({
    hashbang: false,
    mode: 'history',
    base: '/teacher/',
    routes
})

function nextCheck(context, middleware, index) {
  const nextMiddleware = middleware[index];

  if(!nextMiddleware) return context.next;

  return (...parameters) => {
      context.next(...parameters);
      const nextMidd = nextCheck(context, middleware, index + 1);

        nextMiddleware({...context, next: nextMidd});
  }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
        const ctx = {from, next, router, to};
        const nextMiddleware = nextCheck(ctx, middleware, 1);

        return middleware[0]({...ctx, next: nextMiddleware});
    }  
    return next()
})

export default router
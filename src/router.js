import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/Search.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import firebase from 'firebase'

Vue.use(Router);

let router =new Router({
    routes: [
    {
        path:'*',
        redirect: '/login'
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },       
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta:{
            requiresAuth: true
        }
    }, 
      
  ],
});


router.beforeEach ((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    
    if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next ('search')
    else next()
})

export default router 
import { createRouter, createWebHistory} from 'vue-router'
import Home from './components/Pages/home.vue'
import SignIn from './components/User/signin.vue'
import Dashboard from './components/User/dashboard.vue';
import store from './Store';

const routes = createRouter({
    history:createWebHistory(),
    routes:[
        { part:'/',component: Home },
        { path:'/signin', component: SignIn , meta:{ signin:true} },
        { path:'/dashboard', component: Dashboard, meta:{ auth:true }},
    ]
});

routes.beforeEach((to,from,next)=>{
    store.dispatch('user/autoLogin').then(()=>{
        if( to.meta.auth && !store.getters['user/isAuth']){
            next('/signin');
        } else if(to.meta.signin && store.getters['user/isAuth']){
            next('/dashboard');
        } else {
            next()
        }
    });
});


export default routes;
import { createRouter, createWebHistory} from 'vue-router'
import Home from './components/Pages/home.vue'
import SignIn from './components/User/signin.vue'
import Dashboard from './components/User/dashboard.vue';

const routes = createRouter({
    history:createWebHistory(),
    routes:[
        { part:'/',component: Home },
        { path:'/signin', component: SignIn },
        { path:'/dashboard', component: Dashboard },
    ]
});



export default routes;
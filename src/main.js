import { createApp } from 'vue';
import App from './App.vue';
import Router from './routes';
import Store from './Store';

const app =  createApp(App);

app.use(Router);
app.use(Store);
app.mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import Router from './routes';
import Store from './Store';
import Toaster from "@meforma/vue-toaster";

const app =  createApp(App);

app.use(Router);
app.use(Store);
app.use(Toaster);
app.mount('#app')

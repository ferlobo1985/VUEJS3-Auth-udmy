import { createStore } from 'vuex';
import UserModule from './Users/user-module';

const store = createStore({
    modules:{
        user:UserModule
    }
});

export default store;
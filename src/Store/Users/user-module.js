/* eslint-disable */
import axios from 'axios';
import router from '../../routes';
const FAPI_KEY = 'AIzaSyB_EIMcZEg8sHDJtMk9qSxnymdfaWZXGuc';

const userModule = {
    namespaced:true,
    state(){
        return {
            email:'',
            token:'',
            refresh:''
        }
    },
    mutations:{
        authUser(state,payload){
            state.email = payload.email;
            state.token = payload.idToken;
            state.refresh = payload.refreshToken;
        },
        resetAuth(state){
            state.email = null;
            state.token = null;
            state.refresh = null;
        }
    },
    actions:{
        removeToken(){
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
        },
        setToken(context,payload){
            localStorage.setItem("token",payload.idToken);
            localStorage.setItem("refresh",payload.refreshToken);
        },
        signout(context){
            context.commit('resetAuth');
            context.dispatch('removeToken');

            router.push('/');
        },
        async signin(context,payload){
            try{
                const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FAPI_KEY}`,{
                    ...payload,
                    returnSecureToken:true
                });

                context.commit('authUser',response.data);
                context.dispatch('setToken',response.data)
            } catch(error){
                console.log(error);
            }
        },
        signup(context,payload){
            axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FAPI_KEY}`,{
                ...payload,
                returnSecureToken:true
            })
            .then( response => {
                context.commit('authUser',response.data);
                context.dispatch('setToken',response.data)
            })
            .catch( error => console.log(error))
        }
    }
}

export default userModule;
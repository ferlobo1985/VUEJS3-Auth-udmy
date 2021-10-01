<template>
  <div>
    <app-header></app-header>
    <router-view v-if="!this.$store.state.user.loading"/>
    <loader v-else></loader>
  </div>
</template>


<script>
  import appHeader from './components/Header/Header.vue';
  import Loader from './components/Utils/loader.vue'
  import { mapGetters } from 'vuex';

  export default {
    components:{
      appHeader,
      Loader
    },
    computed:{
      ...mapGetters({
        error:'user/getError'
      })
    },
    watch:{
      error(error){
        if(error[0] === true){
          this.$toast.error(error[1]);
        }
      }
    }
    // created(){
    //   this.$store.dispatch('user/autoLogin');
    // }
  }
</script>


<style>
  @import './assets/style.css';
</style>
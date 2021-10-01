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

  export default {
    components:{
      appHeader,
      Loader
    },
    // created(){
    //   this.$store.dispatch('user/autoLogin');
    // }
  }
</script>


<style>
  @import './assets/style.css';
</style>
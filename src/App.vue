<template>
  <div>
    <app-header></app-header>
    <router-view/>
  </div>
</template>


<script>
  import appHeader from './components/Header/Header.vue';

  export default {
    components:{
      appHeader
    },
    created(){
      this.$store.dispatch('user/autoLogin');
    }
  }
</script>


<style>
  @import './assets/style.css';
</style>
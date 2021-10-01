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
    }
  }
</script>


<style>
  @import './assets/style.css';
</style>
<template>
  <div id="app">
      <div class="nav-header">
        <app-header></app-header>
      </div>

      <div class="nav-body">
       <router-view></router-view>
      </div>
  </div>
</template>

<script>
  import Header from "./component/Header"
  import VDistpicker from 'v-distpicker'
  export default {
    name: 'App',
    components :{
      appHeader:Header,
      vdistpicker:VDistpicker
    }

  }
</script>

<style>
  @import "assets/css/base.css";
</style>

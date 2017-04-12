<template>
  <div>
    <h2>Home</h2>
    <router-link :to="{name: 'HomeIndex'}">home</router-link>
    <router-link :to="{name: 'HomeAbout'}">about</router-link>
    <router-link :to="{name: 'AccountLogin'}">login</router-link>
    <router-link :to="{name: 'AccountRegister'}">register</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
  }
</script>
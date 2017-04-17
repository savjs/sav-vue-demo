<template>
  <div id="app">
    <router-link :to="{name: 'HomeIndex'}">home</router-link>
    <router-link :to="{name: 'HomeAbout'}">about</router-link>
    <router-link :to="{name: 'AccountLogin'}">login</router-link>
    <router-link :to="{name: 'AccountRegister'}">register</router-link>
    <router-link :to="{name: 'ArticlePosts'}">articles</router-link>
    <br>
    <router-view class="view"></router-view>
  </div>
</template>
<script type="text/javascript">
  export default {

  }
</script>

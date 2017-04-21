<template>
  <div>
    <h4>{{title}}</h4>
    <p>{{post.title}}</p>
    <br>
    <p>{{post.content}}</p>
    <router-link :to="{
          name: 'ArticleModify',
          params: { id: post.id }
        }">编辑</router-link>
  </div>
</template>
<script>
  import {mapGetters} from 'sav-flux'
  export default {
    computed: {
      ...mapGetters(['title', 'post'])
    }
  }
</script>

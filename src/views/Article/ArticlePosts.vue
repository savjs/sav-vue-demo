<template>
  <div>
    <h4>{{title}}</h4>
    <ul>
      <li v-for="post in posts">
        <router-link :to="{
          name: 'ArticlePost',
          params: { postId: post.id }
        }">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters} from 'sav-flux'
  export default {
    computed: {
      ...mapGetters(['title', 'posts'])
    }
  }
</script>

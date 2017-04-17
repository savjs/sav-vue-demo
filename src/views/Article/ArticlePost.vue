<template>
  <div>
    <h4>{{title}}</h4>
    <p>{{post.title}}</p>
    <br>
    <p>{{post.content}}</p>
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

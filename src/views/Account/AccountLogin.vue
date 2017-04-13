<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{message}}</p>
  </div>
</template>
<script>
  import {mapGetters} from 'sav-flux'
  export default {
    computed: {
      ...mapGetters(['title', 'message'])
    }
  }
</script>
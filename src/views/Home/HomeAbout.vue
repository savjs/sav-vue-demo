<template>
  <h2>{{title}}</h2>
</template>
<script>
  import {mapGetters} from 'sav-flux'
  export default {
    computed: {
      ...mapGetters(['title'])
    }
  }
</script>

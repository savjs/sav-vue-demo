<template>
  <div>
    <h4>{{title}}</h4>
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
<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{welcome.title}}</p>
  </div>
</template>
<script>
  import {mapGetters} from 'sav-flux'
  export default {
    created () {
      console.log(this.welcome)
    },
    computed: {
      ...mapGetters(['title', 'welcome'])
    }
  }
</script>
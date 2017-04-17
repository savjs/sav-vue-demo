<template>
  <div>
    <h4>{{title}}</h4>
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

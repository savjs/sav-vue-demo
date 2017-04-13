<template>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>{{title}}</title>
      <link rel="stylesheet" type="text/css" href="/css/bulma.css">
    </head>
    <body>
      <vue-html></vue-html>
      <vue-init-state></vue-init-state>
    </body>
  </html>
</template>
<script type="text/javascript">
  // import {mapGetters} from 'sav-flux'
  export default {
    created () {
      console.log('created')
    },
    // computed: {
    //   ...mapGetters(['title'])
    // }
  }
</script>
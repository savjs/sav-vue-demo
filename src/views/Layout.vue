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
      <div>
        <br>
        <br>
        <p>首屏路由-服务端渲染</p>
        <pre>{{cloneRoute($route)}}</pre>
      </div>
      <script type="text/javascript" src="/js/vue.js"></script>
      <script type="text/javascript" src="/js/vue-router.js"></script>
      <script type="text/javascript" src="/js/client-entry.js"></script>
    </body>
  </html>
</template>
<script type="text/javascript">
  import {mapGetters} from 'sav-flux'
  function cloneRoute (to, from) {
    var clone = {
      name: to.name,
      path: to.path,
      hash: to.hash,
      query: to.query,
      params: to.params,
      fullPath: to.fullPath,
      meta: to.meta
    }
    if (from) {
      clone.from = cloneRoute(from)
    }
    return Object.freeze(clone)
  }
  export default {
    computed: {
      ...mapGetters(['title'])
    },
    methods: {
      cloneRoute
    }
  }
</script>

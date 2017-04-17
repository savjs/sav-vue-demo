import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import favicon from 'koa-favicon'
import staticCache from 'koa-static-cache'

import {Router} from 'sav-router'
import {schemaPlugin} from 'sav-router-schema'
import {viewPlugin} from 'sav-router-view'
import {vuePlugin} from 'sav-vue'

import pages from './pages/index'

import {resolve} from 'path'

let port = 3000
let app = new Koa()

app.use(favicon(resolve(__dirname, '../favicon.ico')))
app.use(staticCache(resolve(__dirname, '../static'), {
  maxAge: 365 * 24 * 60 * 60
}))

app.use(bodyParser())

let BUILD_VUE_ROUTER = !!process.env.BUILD_VUE_ROUTER

let router = new Router({
  case: 'camel',
  viewRoot: resolve(__dirname, 'views'),
  vueRoot: resolve(__dirname, 'views'),
  vueDest: resolve(__dirname, '../static/js'),
  vueLiveCompiled: !BUILD_VUE_ROUTER && process.env.NODE_ENV !== 'production'
})

router.use(schemaPlugin)
router.use(vuePlugin)
router.use(viewPlugin)

router.declare([].concat(pages))
app.use(router.route())

export {router}

if (!BUILD_VUE_ROUTER) {
  app.listen(port)
  console.log(`server: http://localhost:${port}`)
}

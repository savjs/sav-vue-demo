import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import favicon from 'koa-favicon'

import {Router} from 'sav-router'
import {schemaPlugin} from 'sav-router-schema'
import {vuePlugin} from 'sav-vue'

import pages from './pages/index'

import {resolve} from 'path'

let port = 3000
let app = new Koa()

app.use(favicon(resolve(__dirname, '../favicon.ico')))
app.use(bodyParser())

let router = new Router({
  case: 'camel',
  vueRoot: resolve(__dirname, 'views')
})

router.use(schemaPlugin)
router.use(vuePlugin)

router.declare([].concat(pages))
app.use(router.route())

app.listen(port)
console.log(`server: http://localhost:${port}`)

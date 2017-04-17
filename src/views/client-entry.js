import bootstrap from './server-entry.js'
import routes from './Routes.js'
import {ajax} from 'sav-util'

let app = bootstrap({
  routes
})

app.router.beforeEach((to, from, next) => {
  if (!to.name) {
    return next()
  }
  ajax({
    url: to.fullPath,
    timeout: 5000
  }, function (err, data) {
    if (err) {
      console.error(err)
    } else {
      app.flux.updateState(data).then(() => {
        next()
      })
    }
  })
})

app.vm.$mount('#app')

window.app = app

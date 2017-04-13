import bootstrap from './server-entry.js'
import routers from './Routes.js'

let app = bootstrap({
  routers
})

app.vm.$mount('#app')

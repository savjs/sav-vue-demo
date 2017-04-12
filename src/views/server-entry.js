import VueRouter from 'vue-router'
import Vue from 'vue'
import {Flux, FluxVue} from 'sav-flux'

Vue.use(VueRouter)
Vue.use(FluxVue)

export default function ({routes}) {
  let router = new VueRouter({
    routes
  })
  let flux = new Flux({
    strict: true // enable this for promise action to resolve data copy
  })
  let vm = new Vue({
    vaf: new FluxVue({
      flux
    }),
    router,
    template: `
<div id="app">
    <router-view class="view"></router-view>
</div>
`
  })
  return {
    router,
    vm,
    flux
  }
}

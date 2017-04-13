import VueRouter from 'vue-router'
import Vue from 'vue'
import {Flux, FluxVue} from 'sav-flux'

Vue.use(VueRouter)
Vue.use(FluxVue)

import App from './App.vue'

export default function ({routes}) {
  let router = new VueRouter({
    routes
  })
  let flux = new Flux({
    strict: true // enable this for promise action to resolve data copy
  })
  if (typeof window !== 'undefined') {
    if (window.INIT_STATE) {
      flux.replaceState(window.INIT_STATE)
    }
  }
  let vm = new Vue({
    vaf: new FluxVue({
      flux
    }),
    router,
    ...App
  })
  return {
    router,
    vm,
    flux,
    Vue
  }
}

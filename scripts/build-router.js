require('babel-register')({
  "plugins": [
    "transform-decorators-legacy",
    'transform-object-rest-spread',
    "transform-es2015-modules-commonjs"
  ]
})

process.env.BUILD_VUE_ROUTER = true
let {router} = require('../src')
let renders = []
for (let moduleId in router.modules) {
  let module = router.modules[moduleId]
  if (module.vueRender) {
    if (!~renders.indexOf(module.vueRender)) {
      renders.push(module.vueRender)
    }
  }
}

Promise.all(renders.map((render) => {
  return render.saveVueRouter()
})).then(()=>{
  console.log('success')
})

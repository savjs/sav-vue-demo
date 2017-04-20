require('babel-register')({
  "plugins": [
    "transform-decorators-legacy",
    'transform-object-rest-spread',
    "transform-es2015-modules-commonjs"
  ]
})

process.env.BUILD_VUE_ROUTER = true
let {router} = require('../src')

Promise.all(router.getVueRenders().map((render) => {
  return render.saveVueRouter().then( () => render.compileVueClient({
    dest: true
  }))
})).then(()=>{
  console.log('success')
})

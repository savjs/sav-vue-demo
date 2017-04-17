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
  return render.compileVueClient({
    dest: true
  })
  // return render.saveVueRouter()
})).then(()=>{
  console.log('success')
})

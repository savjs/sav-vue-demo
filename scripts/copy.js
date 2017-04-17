const fs = require('fs-extra')
const path = require('path')

function resolve () {
  let args = [].slice.call(arguments)
  args.unshift(__dirname)
  return path.resolve.apply(path, args)
}

try {
  fs.copySync(resolve('../node_modules/bulma/css/bulma.css'), resolve('../static/css/bulma.css'))
  fs.copySync(resolve('../node_modules/bulma/css/bulma.css.map'), resolve('../static/css/bulma.css.map'))

  fs.copySync(resolve('../node_modules/vue/dist/vue.js'), resolve('../static/js/vue.js'))
  fs.copySync(resolve('../node_modules/vue-router/dist/vue-router.js'), resolve('../static/js/vue-router.js'))
  console.log("success!")
} catch (err) {
  console.error(err)
  process.exit(1)
}

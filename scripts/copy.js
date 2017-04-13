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
  console.log("success!")
} catch (err) {
  console.error(err)
  process.exit(1)
}

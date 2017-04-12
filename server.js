require('babel-register')({
  "plugins": [
    "transform-decorators-legacy",
    'transform-object-rest-spread',
    "transform-es2015-modules-commonjs"
  ]
})

require('./src')

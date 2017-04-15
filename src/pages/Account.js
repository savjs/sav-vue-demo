import {get} from 'sav-router'
import {gen, props} from 'sav-decorator'

@gen
@props({
  vue: true
})
export class Account {
  @get()
  login () {
    return {
      title: '登录',
      message: 'Welcome to Sign In'
    }
  }

  @get()
  register () {
    return {
      title: '注册',
      welcome: {
        title: 'Welcome to Sign Up'
      }
    }
  }
}

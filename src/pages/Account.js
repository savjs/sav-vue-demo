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
      title: 'Login View',
      message: 'Welcome to Sign In'
    }
  }

  @get()
  register () {
    return {
      title: 'Register View',
      welcome: {
        title: 'Welcome to Sign Up'
      }
    }
  }
}

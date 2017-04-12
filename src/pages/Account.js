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
      title: 'Login View'
    }
  }

  @get()
  register () {
    return {
      title: 'Register View'
    }
  }
}

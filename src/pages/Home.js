import {get} from 'sav-router'
import {gen, props} from 'sav-decorator'

@gen
@props({
  vue: true,
  route: {
    path: ''
  }
})
export class Home {
  @get('~')
  index () {
    return {
      title: 'Home View'
    }
  }
  @get()
  about () {
    return {
      title: 'About View'
    }
  }
}

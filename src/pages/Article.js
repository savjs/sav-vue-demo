import {get} from 'sav-router'
import {gen, props} from 'sav-decorator'

let posts = [
  {
    id: 1,
    title: 'post 1 title',
    content: 'post 1 content'
  },
  {
    id: 2,
    title: 'post 2 title',
    content: 'post 2 content'
  }
]

@gen
@props({
  vue: true
})
export class Article {
  @get()
  posts () {
    return {
      title: '文章列表',
      posts
    }
  }

  @get('post/:postId')
  post ({params}) {
    return {
      title: '文章预览',
      post: posts[params.postId - 1]
    }
  }
}

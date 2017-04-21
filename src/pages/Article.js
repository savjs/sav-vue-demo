import {get, post} from 'sav-router'
import {vue} from 'sav-vue'
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

  @vue({
    component: 'Article/ArticleModify'
  })
  @get('modify/:id?')
  modify ({params}) {
    let ret
    if (params.id) {
      ret = {
        title: '修改文章',
        post: posts[params.id -1]
      }
    } else {
      ret = {
        title: '创建文章',
        post: {
          id: null,
          title: '',
          content: ''
        }
      } 
    }
    return ret
  }

  @vue({
    component: 'Article/ArticleModify'
  })
  @post('update/:id?')
  update ({params, request:{body}}) {
    if (params.id) {
      let post = posts[params.id -1 ]
      if (post) {
        post = posts[post.id -1] = Object.assign(post, body)
        return {
          title: '修改成功',
          post
        }
      }
    } else {
      body.id = posts.length + 1
      posts.push(body)
      return {
        title: '创建成功',
        post: body
      }
    }
  }
}

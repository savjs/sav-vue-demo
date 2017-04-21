<template>
  <div>
    <h4>{{title}}</h4>
    <sav-form :to="{name: 'ArticleUpdate', params: {id: post.id}}" :data="post">
      <label>
        <span>标题</span>
        <input type="text" v-model="post.title">
      </label>
      <label>
        <span>内容</span>
        <textarea v-model="post.content"></textarea>
      </label>
      <button class="button" type="submit">保存</button>
    </sav-form>
  </div>
</template>
<script>
  import {mapGetters} from 'sav-flux'
  export default {
    computed: {
      ...mapGetters(['title', 'post'])
    }
  }
</script>

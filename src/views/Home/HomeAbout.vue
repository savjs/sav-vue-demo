<template>
  <div>
    <h2>{{title}}</h2>
    <v-dir inline-template>
      <div>
        <h4>v-model与v-bind和v-on的使用方式</h4>
        <!-- v-on -->
        <button v-on:mousedown="test($event)">调用函数表达式</button><br>
        <button v-on:mousedown="num += $event.which">调用其他表达式</button><br>
        <button @mousedown="test">绑定函数名称</button><br>
        <!-- v-bind -->
        <input type="text" v-bind:value="num"><br>
        <input type="text" :value="num"><br>
        <!-- v-model -->
        <input type="number" v-model.number="num"><br>
        <input type="number" v-bind:value="num" v-on:input="num = Number($event.target.value)"><br>
      </div>
    </v-dir>
  </div>
</template>
<script>
  import {mapGetters} from 'sav-flux'
  export default {
    computed: {
      ...mapGetters(['title'])
    },
    components: {
      VDir: {
        data () {
          return {
            num: 0
          }
        },
        methods: {
          test ($event) {
            this.num += $event.which
          }
        }
      }
    }
  }
</script>

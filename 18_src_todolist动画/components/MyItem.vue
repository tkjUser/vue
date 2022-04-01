<template>

  <li>
      <label>
        <!--点击勾选框会触发点击事件-->
        <!--      <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>  -->
        <!--也可使用change，每次勾选都会使勾选状态发生变化-->
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!--   如下代码也能实现功能，但是不建议使用，因为v-model使用的是props传入的数据，并修改了props数据，只是vue没有监测到
           vue监测对象是否改变，只看对象里面的属性是否改变（属性删去，改变属性名等），而属性的值改变了vue是监测不到的-->
        <!--      <input type="checkbox" v-model="todo.done"/>-->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
            type="text"
            v-show="todo.isEdit"
            :value="todo.title"
            @blur="handleBlur(todo,$event)"
            ref="inputTitle"
        >
      </label>

      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>

</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  //声明接收todo对象
  props:['todo'],

  data(){
    return{}
  },
  methods:{
    //勾选or取消勾选
    handleCheck(id){
      // console.log(id)
      //通知App组件将对应的todo对象的done值取反
      //this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    // 删除
    handleDelete(id){
      if(confirm('确定删除啊？')){
        //confirm会弹出一个对话框询问是否确认执行该操作
        // console.log(id)
        //this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo',id)
      }
    },
    // 编辑
    handleEdit(todo){
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit=true
      }else{
        this.$set(todo,'isEdit',true)   // 添加响应式属性
        console.log('@')
      }
      //一般vue是先把整个函数执行完，遇到响应式属性修改不会立即修改dom，而是等这个函数执行完再更新dom，
      // 而获取焦点事件应该是在dom更新后再执行，而不是之前执行，会被覆盖掉，这里借助vue自带的$nextTick函数
      //$nextTick指定的回调函数会在DOM更新之后再执行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()   //点击编辑按钮后自动获取焦点
      })

    },
    //失去焦点事件，当鼠标点击非input区域会失去焦点（真正执行修改逻辑）
    handleBlur(todo,e){
      todo.isEdit=false
      // console.log('updateTodo',todo.id,e.target.value)
      if(!e.target.value.trim()){
        return alert('输入不能为空')

      }
      this.$bus.$emit('updateTodo',todo.id,e.target.value)

    }



  }

}
</script>
<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
  /*鼠标悬浮效果*/
  li:hover{
    background-color:#dddddd;
  }
  /*当鼠标悬浮到选项时显示删除按钮*/
  li:hover button{
    display: block;
  }





</style>
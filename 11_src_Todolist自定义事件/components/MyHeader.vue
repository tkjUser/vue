<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
<!--    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>-->
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  export default {
    name: "MyHeader",
    // props:['addTodo'],    自定义事件不需要接收这个了
    data(){
      return{
        title:''
      }
    },
    /*methods:{
      add(event){
        //将用户的输入包装成为一个todo对象，id使用唯一标识nanoid
        const todoObj={id:nanoid(),title:event.target.value,done:false}
        // console.log(event.target.value)
        // console.log(todoObj)
        //把todo对象传给父组件App.vue
        this.addTodo(todoObj)
        //把输入创建成todolist后删除输入框的内容(直接操作dom)
        //event.target.value=''
      }
    }*/
    methods:{
      add(){
        //如果用户在输入框什么也没有输入，则不生成todolist（校验数据）
        if(!this.title.trim())
          return alert('输入不能为空')
        const todoObj = {id:nanoid(),title:this.title,done:false}
        // console.log(this.title)
        //通知App组件去添加一个todo对象
        //this.addTodo(todoObj)
        this.$emit('addTodo',todoObj)
        //清空输入
        this.title=''

      }
    }
  }
</script>
<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }

</style>
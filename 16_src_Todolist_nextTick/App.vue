<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
<!--        <MyHeader :addTodo="addTodo"/>&lt;!&ndash;把函数传给MyHeader&ndash;&gt;-->
        <MyHeader @addTodo="addTodo"/>  <!--给Myheader添加自定义事件addTodo,回调也是addTodo  -->
        <MyList :todoArr="todoArr" /><!--想传给item，只能逐层传递，先传给list-->
<!--        <MyFooter :todoArr="todoArr" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>-->
        <MyFooter :todoArr="todoArr" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>

      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
//引入school组件
import MyHeader from "../src/components/MyHeader";
import MyList from "../src/components/MyList";
import MyFooter from "../src/components/MyFooter";


export default {
  name: "App",
  components:{
    MyHeader,
    MyList,
    MyFooter,
  },
  data(){
    return {
      //第一次使用时getItem是null，因为用户之前没输入过记录，此时null没有length属性后面会报错，需要用“或”来指定第一次使用空数组[]
      todoArr:JSON.parse(localStorage.getItem('todoArr')) || []
      /*[//id用字符串，因为Number类型的id有尽头，可能超过最大范围
        一般的待办事项没有初始值
        {id:'001',title:'吃饭',done:true},
        {id:'002',title:'喝酒',done:false},
        {id:'003',title:'打游戏',done:true},
      ]*/
    }

  },
  methods:{//数据在哪，操作数据的方法就在哪
    //添加一个todo
    addTodo(todoObj){
      // console.log('我是app组件，我收到了数据：',x)
      this.todoArr.unshift(todoObj) //unshift():Inserts new elements at the start of an array.
    },
    //勾选或取消勾选一个todo
    checkTodo(id){
      this.todoArr.forEach((todo)=>{
        if(todo.id===id)  //三个等于号！！！
          todo.done=!todo.done

      })
    },
    //修改编辑更新todo
    updateTodo(id,title){
      this.todoArr.forEach((todo)=>{
        if(todo.id===id)  //三个等于号！！！
          todo.title=title

      })
    },
    //删除一个todo
    deleteTodo(_,id){  //下划线表示占位，因为pubsub里面第一位是消息名称
      /*this.todoArr = this.todoArr.filter((todo)=>{
        return todo.id !==id
      })*/
      this.todoArr = this.todoArr.filter(todo=>todo.id !== id)
    },
    //全选或全不选
    checkAllTodo(done){
      this.todoArr.forEach((todo)=>{
        todo.done=done
      })
    },
    //清除所有已经完成的todo
    clearAllTodo(){
      this.todoArr=this.todoArr.filter((todo)=>{
        return !todo.done
      })
    }


  },
  watch:{
    /*普通监视
    todoArr(value){
      localStorage.setItem('todoArr',JSON.stringify(value))
    }*/
    todoArr:{
      //深度监视，会监视到对象里面的属性
      deep:true,
      handler(value){
        localStorage.setItem('todoArr',JSON.stringify(value))
      }


    }
  },
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('updateTodo',this.updateTodo)
    this.pubId=pubsub.subscribe('deleteTodo',this.deleteTodo)

  },
  beforeDestroy() {
    this.$bus.$off('checkTodo',this.deleteTodo)
    this.$bus.$off('updateTodo',this.deleteTodo)
    pubsub.unsubscribe(this.pubId)

  }


}
</script>


<style>
  /*base*/
  /*base表示所有组件都需要用的样式，放在App.vue中*/
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid skyblue;
    margin-right: 5px;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

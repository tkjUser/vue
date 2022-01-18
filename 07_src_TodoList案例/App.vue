<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/><!--把函数传给MyHeader-->
        <MyList :todoArr="todoArr" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/><!--想传给item，只能逐层传递，先传给list-->
        <MyFooter :todoArr="todoArr" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
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
      todoArr:[//id用字符串，因为Number类型的id有尽头，可能超过最大范围
        {id:'001',title:'吃饭',done:true},
        {id:'002',title:'喝酒',done:false},
        {id:'003',title:'打游戏',done:true},
      ]
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
    //删除一个todo
    deleteTodo(id){
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

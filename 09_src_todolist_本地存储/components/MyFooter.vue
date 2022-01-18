<template>
  <div class="todo-footer" v-show="total">
    <label>
<!--      <input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>

export default {
  name: "MyFooter",
  data(){
    return{}
  },
  props:['todoArr','checkAllTodo','clearAllTodo'],
  computed:{
    total(){
      return this.todoArr.length
    },
    doneTotal(){
      /*let i=0
      this.todoArr.forEach((todo)=>{
        if (todo.done)
          i++
      })
      return i*/
      //reduce函数的pre表示上一个返回值，current表示当前值，参数0表示用于统计
      /*const x = this.todoArr.reduce((pre,current)=>{
        console.log('@',pre)
        //当前打勾的计数，没打勾的不计数
        return pre + (current.done ? 1 : 0)
      },0)
      console.log(x)*/
      //简写
      return this.todoArr.reduce((pre,current)=> pre + (current.done ? 1 : 0),0)
    },
    isAll:{
      //已完成数量和全部数量相同且不为零时自动勾上最下面的小方框
      get(){
        return this.doneTotal == this.total && this.total>0
      },
      set(value){
        // console.log('@@@',value)
        this.checkAllTodo(value)
      }
    }

  },
 methods:{
   /*checkAll(e){
    //console.log(e.target.checked)
    this.checkAllTodo(e.target.checked)
  },*/
   clearAll(){
     this.clearAllTodo()
   }
}


}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
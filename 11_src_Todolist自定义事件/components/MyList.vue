<template>

  <ul class="todo-main">
    <!-- 这里todo传数据给MyItem时需要用v-bind绑定，简写为”：“，表示传的是一个对象，否则传过去就是一个字符串了 -->
    <MyItem
        v-for="todoObj in todoArr"
        :key="todoObj.id"
        :todo="todoObj"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
    />

  </ul>
</template>

<script>
import MyItem from "./MyItem";//MyItem是MyList的子组件，需在此引入

export default {
  name: "MyList",
  components:{MyItem},
  //声明接收APP传递过来的数据，其中todoArr是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
  props:['todoArr','checkTodo','deleteTodo']
}
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
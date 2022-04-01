<template>

  <ul class="todo-main">
    <!-- 这里todo传数据给MyItem时需要用v-bind绑定，简写为”：“，表示传的是一个对象，否则传过去就是一个字符串了 -->
    <transition-group name="todo" appear>
      <MyItem
        v-for="todoObj in todoArr"
        :key="todoObj.id"
        :todo="todoObj"
    />
    </transition-group>
  </ul>
</template>

<script>
import MyItem from "./MyItem";//MyItem是MyList的子组件，需在此引入

export default {
  name: "MyList",
  components:{MyItem},
  props:['todoArr']
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



  /*动画效果*/
  .todo-enter-active{
    animation:atguigu 0.5s linear;
  }

  .todo-leave-active{
    animation: atguigu 0.5s linear reverse;
  }
  /*自己写的动画*/
  @keyframes atguigu {
    from{
      transform: translateX(100%);
    }
    to{
      transform: translateX(0px);
    }
  }

</style>
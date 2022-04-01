<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
<!--    <h1 v-show="isShow" class="come">你好啊！</h1>-->
    <transition name="hello" :appear='true'>   <!--appear为真表示第一次加载时使用动画效果-->
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return {
      isShow:true
    }
  }

}
</script>

<style scoped>
  h1{
    background-color: orange;
  }
  /*动画效果*/
  .hello-enter-active{
    animation:atguigu 0.5s linear;
  }

  .hello-leave-active{
    animation: atguigu 0.5s linear reverse;
  }

  /*自己写的动画*/
  @keyframes atguigu {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }


</style>
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
<!--    <h1 v-show="isShow" class="come">你好啊！</h1>-->
    <transition-group
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
        :appear='true'
    >   <!--appear为真表示第一次加载时使用动画效果-->
      <h1 v-show="isShow" key="1">大帅逼！</h1>
      <h1 v-show="isShow" key="2">大帅逼！</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
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









</style>
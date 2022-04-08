<template>
  <ul>
    <li :style="{opacity}">欢迎学习vue</li>
    <li>news001<input type="text"></li>
    <li>news002<input type="text"></li>
    <li>news003<input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data(){
    return {
      opacity: 1,
    }

  },
  /*mounted() {
    this.timer=setInterval(()=>{
      // console.log('@')
      this.opacity -= 0.01
      if(this.opacity<=0)
        this.opacity=1
    },16)
  },
  beforeDestroy() {
    console.log('news即将被销毁了')
    clearInterval(this.timer)
  }*/

  // 路由组件专属的两个生命周期钩子

  activated() { //路由组件跳转到该组件时
    console.log('news组件被激活了')
    this.timer=setInterval(()=>{
      console.log('@')
      this.opacity -= 0.01
      if(this.opacity<=0)
        this.opacity=1
    },16)
  },
  deactivated() {  //该组件被切走时
    console.log('news组件失活了')
    clearInterval(this.timer)
  },


}
</script>

<style scoped>

</style>
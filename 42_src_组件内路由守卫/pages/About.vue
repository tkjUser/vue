<template>
  <h2>我是About内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log('About组件即将被销毁了')
  },

  mounted() {
    // console.log('About组件挂载完毕',this)
    console.log('佩奇',this.$route)
  },

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to,from,next){
    console.log('app---beforeRouterEnter')
    if(to.meta.isAuth){ //判断是否需要鉴定权限
      // 这里是事先再浏览器本地存储里输入了key为”school“，value为”atguigu“的键值对来模拟有权限的用户
      if(localStorage.getItem('school')==='atguigu'){
        next()  //放行
      }else{
        alert('学校名不对，无权限查看')
      }
    }else{
      next() //放行
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to,from,next){
    console.log('app---beforeRouterLeave',to,from)
    next()  // 放行
  }
}
</script>

<style scoped>

</style>
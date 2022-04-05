<template>
    <div class="col-xs-offset-2 col-xs-8">
      <div class="page-header">
        <h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="test">测试一下go</button>
      </div>

    </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    back(){
      // console.log(this.$router)
      this.$router.back()
    },
    forward(){
      // console.log(this.$router)
      this.$router.forward()
    },
    test(){
      //go函数传入一个整数，正整数标签前进几步，负整数表示后退几步
      this.$router.go(-2)
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>



export default {
  name: "School",
  data(){
    return {
      name:'青科qingdao',
      address:'崂山'
    }
  },
  mounted(){
      // console.log('school',this)
      this.$bus.$on('hello',(data)=>{
      console.log('我是school组件，收到了数据',data)
    })
  },
  beforeDestroy() {
    // 在该组件被销毁时，也关闭这个组件对应的总线
    this.$bus.$off('hello')
  }

}
</script>

<style scoped>
  .school{
    background-color: blanchedalmond;
    padding: 5px;
  }
</style>
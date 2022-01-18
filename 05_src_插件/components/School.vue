<template>
  <div>
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="test_hello">点我测试一下hello方法</button>
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
  methods:{
    test_hello(){
      this.hello()
    }

  }

}
</script>

<style scoped>

</style>
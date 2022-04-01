<template>
  <div class="student">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给school组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data(){
    return {
      name:'张三',
      sex:'男',
    }
  },
  mounted(){
    // console.log('Student',this.x)
  },
  methods:{
    sendStudentName() {
      // this.$bus.$emit('hello',this.name)
      pubsub.publish('hello',666)
    }
  }

}
</script>
<!-- less样式可以嵌套，纯css不能嵌套 -->
<style scoped lang="less">
  .student{
    background-color: dodgerblue;
    padding: 5px;
    margin-top: 30px;
  }
</style>
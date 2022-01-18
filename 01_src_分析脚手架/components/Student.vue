<template>
  <!--组件的结构-->
  <div class="demo">
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="showName">点我提示学生名</button>
  </div>

</template>

<script>
  //组件交互相关的代码（数据，方法等）
  // export const school=Vue.extend({    //分别暴露
  export default {   //默认暴露的简写形式，连Vue.extend也省略
    name:'Student',//单文件组件最好和文件名保持一致
    data(){
      return {
        studentName:'张三',
        age:18

      }
    },
    methods:{
      showName(){
        alert(this.studentName)
      }

    }

  }
  // export {school}  //统一暴露
  //export default school  //默认暴露，暴露的只有一个时一般用默认暴露

</script>

<style>
  /*组件的样式*/
  /*.demo{
    background-color: dodgerblue;
  }
*/
</style>
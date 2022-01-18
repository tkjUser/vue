<template>
  <!--组件的结构-->
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{schoolAddress}}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>

</template>

<script>
  //组件交互相关的代码（数据，方法等）
  // export const school=Vue.extend({    //分别暴露
  export default {   //默认暴露的简写形式，连Vue.extend也省略
    name:'School',//单文件组件最好和文件名保持一致
    data(){
      return {
        schoolName:'家里蹲',
        schoolAddress:'家乡'

      }
    },
    methods:{
      showName(){
        alert(this.schoolName)
      }

    }



  }
  // export {school}  //统一暴露
  //export default school  //默认暴露，暴露的只有一个时一般用默认暴露

</script>

<style>
  /*组件的样式*/
  .demo{
    background-color: green;
  }

</style>
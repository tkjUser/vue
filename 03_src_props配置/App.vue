<template>
  <div>
<!--       <Student/>-->
       <hr>
<!--  发送数据  -->
       <Student name="李四" sex="女" v-bind:age="18"/>
       <Student name="王老五" sex="男" :age="99"/>
  </div>
</template>

<script>
  //引入school组件
  import Student from './components/Student'

  export default {
    name: "App",
    components:{
      Student,
    },
  }
</script>


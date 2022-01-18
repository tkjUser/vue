<template>
  <div class="demo">
    <h2 class="title">学生名称：{{name}}</h2>
    <h2 class="tkj">学生性别：{{sex}}</h2>
  </div>
</template>

<script>

export default {
  name: "Student",
  data(){
    return {
      name:'张三',
      sex:'男'
    }
  },

}
</script>
<!-- less样式可以嵌套，纯css不能嵌套 -->
<style scoped lang="less">
  .demo{
    background-color: dodgerblue;
    .tkj{
      font-size: 40px;
    }
  }
</style>
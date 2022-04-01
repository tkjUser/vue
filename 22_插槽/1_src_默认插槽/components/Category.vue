<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--  定义一个插槽（挖个坑，等着组件的使用者进行填充）  -->
    <slot>我是插槽的默认值，当使用者没有传递具体结构时我会出现</slot>
  </div>

</template>

<script>
  export default {
    name: "Category.vue",
    props:['title']



  }
</script>

<style scoped>
  .category{
    background-color: #4cae4c;
    width: 200px;
    height: 300px;

  }
  h3{
    text-align: center;
    background-color: #5bc0de;
  }
  img{
    width: 100%;
  }

</style>
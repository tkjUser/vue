<template>
  <div class="schoolStyle">
    <h2>学校信息</h2>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>

  </div>
</template>

<script>
export default {
  name: "school",
  data(){
    return {
      name:'青科',
      address:'青岛崂山区'
    }
  }
}
</script>

<style scoped>
  .schoolStyle{
    background-color: blanchedalmond;
  }
</style>
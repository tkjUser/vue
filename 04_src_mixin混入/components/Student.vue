<template>
  <div>
    <h2 @click="showName">学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
//导入一个混合
import {hunhe,hunhe2} from '../mixin'
export default {
  name: "Student",
  data(){
    return {
      name:'张三',
      sex:'男'
    }
  },
  mixins:[hunhe,hunhe2]
}
</script>

<style scoped>

</style>
<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>

// import {hunhe,hunhe2} from '../mixin'

export default {
//data和methods中的数据发生冲突以组件内的代码为主，但像生命周期钩子不以任何人为主，它都要，两边都执行，且先执行混入的代码，再执行组件的代码
  name: "School",
  data(){
    return {
      name:'青科',
      address:'崂山'
    }
  },
  // mixins:[hunhe,hunhe2],
  mounted(){
    console.log('你好啊!!!!!!!!!!!')
  }


}
</script>

<style scoped>

</style>
<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <student/>
  </div>
</template>

<script>
//引入school组件
import Student from './components/Student'
import School from './components/School'

export default {
  name: "App",
  components:{
    Student,
    School
  },
  data(){
    return {
      msg:'你好啊'
    }

  },

}
</script>
<!-- App中写的样式一般不加scoped限定，这样别的组件可以直接复用其中的样式，
适合把一些通用的样式（如字体大小）写在里面，让其他组件使用
-->
<style>
.title{
  color:red;
}
.app{
  background-color: grey;
  padding: 5px;
}
</style>
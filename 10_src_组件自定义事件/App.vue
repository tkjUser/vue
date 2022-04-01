<template>
  <div class="app">
<!--    <h1>{{msg}},学生姓名是：{{studentName}}</h1>-->
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件来实现：子给父传递数据(第一种写法,使用@或v-on) -->
<!--    <Student @qust="getStudentName" @demo="m1"/>-->
<!--<Student @qust.once="getStudentName"/>  只触发一次事件-->
<!--<Student v-on:qust="getStudentName"/>-->
    <!-- 通过父组件给子组件绑定一个自定义事件来实现：子给父传递数据(第二种写法,使用ref,更灵活) -->
    <!-- .native表示把当前的事件看作原生DOM事件（而不是默认的自定义事件）   -->
    <Student ref="student" @click.native="show"/>

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
      studentName:'',
      msg:'你好啊'
    }

  },
  methods:{
    getSchoolName(name){
      console.log('App收到了学校的名称',name)
    },
    getStudentName(name,...params){ //接收多个值,这里是es6的写法,把除name外的值分给a数组
      console.log('App收到了学生的名称',name,params)
      this.studentName=name
      // setTimeout(()=>{
      //   console.log('App收到了学生的名称',name)
      //
      // },3000)
    },
    m1(){
      console.log('demo事件被触发了')
    },
    show(){
      alert(123)
    }

  },
  mounted(){  //App挂载时获取其组件实例对象,然后在触发qust事件后调用该对象的getStudentName方法
    this.$refs.student.$on('qust',this.getStudentName)
    //下面的方法使用"once",只会触发一次
    //this.$refs.student.$once('qust',this.getStudentName)
  }
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
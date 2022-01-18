<template>
  <div>
    <!--  一般不会直接去操作DOM对象，vue提供了ref属性来代替id属性  -->
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出上方的dom元素</button>
    <school ref="sch"/>
  </div>
</template>

<script>
  //引入school组件
  import school from './components/school'

  export default {
    name: "App",
    components:{
      school,
    },
    data(){
      return{
        msg:'欢迎学习vue'
      }
    },
    methods:{
      showDom(){
        console.log(this.$refs.title)   //拿到ref=’title‘对应的标签，这里是h1标签
        console.log(this.$refs)   //拿到所有ref对应的标签，这里是h1和button标签
        console.log(this.$refs.sch)   //拿到ref=’sch‘对应的组件实例标签，这里是school标签

      }
    },

  }
</script>


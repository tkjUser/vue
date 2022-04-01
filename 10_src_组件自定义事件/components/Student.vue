<template>
  <div class="student">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑qust事件</button>
    <button @click="death">销毁当前的Student组件的实例(vc)</button>
  </div>
</template>

<script>

export default {
  name: "Student",
  data(){
    return {
      name:'张三',
      sex:'男',
      number:0
    }
  },
  methods:{
    add(){
      console.log('add回调被调用了')
      this.number++
    },
    sendStudentName(){
      //触发Student组件实例身上的qust事件
      //this.$emit('qust',this.name)
      //传入多个值
      this.$emit('qust',this.name,666,888)
      //触发多个事件
      // this.$emit('demo')
      this.$emit('click')
    },
    unbind(){
      this.$off('qust')  //解绑一个自定义事件
      //this.$off('qust','demo')  //解绑两个自定义事件
      // this.$off()   //解绑所有自定义事件
    },
    death(){
      //销毁了当前的Student组件的实例,销毁后所有Student实例的自定义事件全都不奏效了
      this.$destroy()
    },
  }
}
</script>
<!-- less样式可以嵌套，纯css不能嵌套 -->
<style scoped lang="less">
  .student{
    background-color: dodgerblue;
    padding: 5px;
    margin-top: 30px;
  }
</style>
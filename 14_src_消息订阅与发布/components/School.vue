<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data(){
    return {
      name:'青科qingdao',
      address:'崂山'
    }
  },
  /*methods:{
    demo(msgName,data){
      console.log('hello消息收到了',data,this)
    }
  },*/
  mounted(){
      /*// console.log('school',this)
      this.$bus.$on('hello',(data)=>{
      console.log('我是school组件，收到了数据',data)
      })*/

    //this.pubId = pubsub.subscribe('hello',this.demo)
    this.pubId = pubsub.subscribe('hello',(msgName,data)=>{//这里接收两个数据，分别是消息名a和消息内容b
      console.log(this)
      console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
    })
  },
  beforeDestroy() {
    // 在该组件被销毁时，也关闭这个组件对应的总线
    // this.$bus.$off('hello')

    pubsub.unsubscribe(this.pubId)
  }

}
</script>

<style scoped>
  .school{
    background-color: blanchedalmond;
    padding: 5px;
  }
</style>
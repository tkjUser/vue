<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生信息</h2>
    <h2>学生名称：{{name}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="changeAge">尝试修改收到的年龄属性</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      msg:'我是青科之光',
      myAge:this.age    //先由props接收数据，然后把接收到的数据赋给myAge，通过修改myAge达到间接修改age的目的
      // name:'张三',
      // age:18,
      // sex:'nan'
    }
  },
  methods:{
    changeAge(){  //不要直接去修改传入的参数，vue后台会报错
      //this.age=20
      this.myAge++
    }
  },

  //props:['name','sex','age']  //简单声明接收数据

  /*props:{       //接收的同时对数据的类型进行限制
    name:String,
    age:Number,
    sex:String
  }*/

  props:{       //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    name:{
      type:String,    //name的类型是字符串
      required:true   //name必须要传
    },
    age:{
      type:Number,
      default:99    //默认值age=99，不传age就使用默认值
    },
    sex:{
      type:String,    //name的类型是字符串
      required:true   //name必须要传
    },



  }



}
</script>

<style scoped>

</style>
<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods:{
    getStudents(){
      axios.get('http://localhost:8080/atguigu/students').then(
          // 请求前缀“atguigu   ”放在协议名和主机名之后，端口号之前
          response => {
            console.log('请求成功了',response.data)
          },
          error => {
            console.log('请求失败了',error.message)
          }
      )
    },
    getCars(){
      axios.get('http://localhost:8080/demo/cars').then(
          // 请求前缀“demo   ”放在协议名和主机名之后，端口号之前
          response => {
            console.log('请求成功了',response.data)
          },
          error => {
            console.log('请求失败了',error.message)
          }
      )
    },


  }
}
</script>

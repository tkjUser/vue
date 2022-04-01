<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Search.vue",
  data(){
    return {
      keyWord:''
    }
  },
  methods:{
    searchUsers() {
      //请求前更新lsit数据
      this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
      // 这里用的es6的模板字符串，里面的值用反单引号包裹,这里用的https，但这个网址配置了cors，解决了跨域问题
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response =>{
            console.log('请求成功',response.data.items)
            //请求成功后更新List数据
            this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})

          },
          error =>{
            console.log('请求失败',error.message)
            //请求失败后返回失败的结果
            this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})

          }
      )
    }
  }
}
</script>

<style scoped>

</style>
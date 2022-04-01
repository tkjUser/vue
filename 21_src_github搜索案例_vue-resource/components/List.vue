<template>
  <div class="row">
    <!--  展示用户列表   -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!--  展示欢迎词  -->
    <h1 v-show="info.isFirst">欢迎使用</h1>
    <!--  展示加载中  -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!--  展示错误信息  -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>



  </div>
</template>

<script>
export default {
  name: "List.vue",
  data(){
    return{
      info:{
        isFirst:true,       //list组件是否初次展示，初次展示显示欢迎界面
        isLoading:false,    //是否加载中，点击搜索后，界面显示前显示加载中
        errMsg:'',          // 保存搜索失败时的信息
        users:[]
      }
    }
  },
  mounted() {
    this.$bus.$on('updateListData',(dataObj)=>{
      console.log(this)
      this.info={...this.info,...dataObj}  //es6语法，把对象间相同的属性合并值，不同的保留
    })
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
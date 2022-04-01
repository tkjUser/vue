<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://img.scbao.com/uploads/allimg/110603/52-11060319503629.jpg" alt=""/>
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="www.baidu.com">单机游戏</a>
        <a href="www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <img slot="center" src="https://img.scbao.com/uploads/allimg/110611/9120-11061111452039.jpg" alt=""/>
<!--      <template slot="footer">-->
<!--   这种v-slot的写法必须配合template来写，不能单独使用   -->
      <template v-slot:footer>
        <div class="foot">
          <a href="www.baidu.com">经典</a>
          <a href="www.baidu.com">热门</a>
          <a href="www.baidu.com">推荐</a>
        </div>
        <h4>欢迎来看</h4>
      </template>

    </Category>

  </div>
</template>

<script>
  // import '../public/css/bootstrap.css'
  import Category from './components/Category'
  // import List from './components/List'
  export default {
    name: "App",
    components:{Category},
    data(){
      return {
        foods:['tomato','banana','orange','apple'],
        games:['a','b','c','d'],
        films:['1','2','3','4']
      }
    }



  }
</script>


<style lang="css">
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align:center;
  }

</style>
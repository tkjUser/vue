<template>
  <div class="container">
    <Category title="美食">
      <img src="https://img.scbao.com/uploads/allimg/110603/52-11060319503629.jpg" alt=""/>
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>

    <Category title="电影">
      <img src="https://img.scbao.com/uploads/allimg/110611/9120-11061111452039.jpg" alt=""/>
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
  .container{
    display: flex;
    justify-content: space-around;
  }


</style>
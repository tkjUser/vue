<template>
  <div class="container">

    <Category title="游戏">
      <template scope="Game">
        <ul>
          <li v-for="(g,index) in Game.games" :key="index">{{g}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li style="color:palevioletred" v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
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
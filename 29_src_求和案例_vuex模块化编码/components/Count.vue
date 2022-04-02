<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>  <!--模板里面可以看到vc身上的所有东西，不用写this.$store-->
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 使用mapMutations简化代码时，它不知道我们要参与运算的是哪个变量，默认会把Event传给mutations，因此需要在这里手动传一下参与运算的变量  -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

  export default {
    name: "Count",
    data(){
      return {
        n:1,    // 用户选择的数字，初始化为1

      }
    },
    computed:{
      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      ...mapState('countAbout',["sum","school","subject"]),  //确保生成的计算属性名和从state中取出的名必须相同
      ...mapState('personAbout',['personList']),  //确保生成的计算属性名和从state中取出的名必须相同

      //借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters('countAbout',["bigSum"])

    },
    methods:{
      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
      ...mapMutations('countAbout',{increment:'ADD'}),  // 多模块需要指明是哪个模块的方法

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
      ...mapActions('countAbout',{decrement:'sub',incrementOdd:'addOdd',incrementWait:'addWait'})

    },
    mounted() {
      console.log('Count',this.$store)
      // const x=mapState({he:"sum",xuexiao:"school",xueke:"subject"})
      // console.log(x)

    }

  }
</script>

<style scoped>


</style>
<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>  <!--模板里面可以看到vc身上的所有东西，不用写this.$store-->
<!--    <h1>当前求和放大10倍为：{{dahe}}</h1>-->
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
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
      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      //...mapState({sum:"sum",school:"school",subject:"subject"}),  // es6语法，把mapState对象里面的键值对取出

      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      ...mapState(["sum","school","subject"]),  //确保生成的计算属性名和从state中取出的名必须相同

      //借助mapGetters生成计算属性，从getters中读取数据（对象写法）
      // ...mapGetters({bigSum:"bigSum"})

      //借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters(["bigSum"])



    },
    methods:{
      //程序员亲自写方法（commit对应mutations）
      /*increment(){
        this.$store.commit('ADD',this.n) // 这里直接调用commit，需要用大写的操作描述
      },*/

      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
      ...mapMutations({increment:'ADD'}),

      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
      //...mapMutations(['ADD']),   //要求方法名和操作一致。在@click处把方法名改为“ADD”


      //程序员自己写方法（dispatch对应actions）
      /*decrement(){
        this.$store.dispatch('sub',this.n)
      },
      incrementOdd(){
        this.$store.dispatch('addOdd',this.n)
      },
      incrementWait(){
        /!*setTimeout(()=>{
          this.$store.dispatch('add',this.n)
        },500)*!/
        this.$store.dispatch('addWait',this.n)
      },*/

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
      ...mapActions({decrement:'sub',incrementOdd:'addOdd',incrementWait:'addWait'})

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
      //...mapActions({'sub','addOdd','addWait'})   //要求方法名和操作一致。在@click处把方法名改为“sub”，'addOdd','addWait'

    },
    mounted() {
      // console.log('Count',this.$store)
      const x=mapState({he:"sum",xuexiao:"school",xueke:"subject"})
      console.log(x)

    }

  }
</script>

<style scoped>


</style>
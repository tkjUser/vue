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
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'

  export default {
    name: "Count",
    data(){
      return {
        n:1,    // 用户选择的数字，初始化为1

      }
    },
    computed:{
      // 靠程序员自己去写的计算属性
      /*sum(){
        return this.$store.state.sum
      },
      school(){
        return this.$store.state.school
      },
      subject(){
        return this.$store.state.subject
      },*/

      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      //...mapState({sum:"sum",school:"school",subject:"subject"}),  // es6语法，把mapState对象里面的键值对取出
      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      ...mapState(["sum","school","subject"]),  //确保生成的计算属性名和从state中取出的名必须相同


      //getters
      /*bigSum(){
        return this.$store.getters.bigSum
      },*/

      //借助mapGetters生成计算属性，从getters中读取数据（对象写法）
      // ...mapGetters({bigSum:"bigSum"})
      //借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters(["bigSum"])



    },
    methods:{
      increment(){
        this.$store.commit('ADD',this.n) // 这里直接调用commit，需要用大写的操作描述
      },
      decrement(){
        this.$store.dispatch('sub',this.n)
      },
      incrementOdd(){
        this.$store.dispatch('addOdd',this.n)
      },
      incrementWait(){
        /*setTimeout(()=>{
          this.$store.dispatch('add',this.n)
        },500)*/
        this.$store.dispatch('addWait',this.n)

      },

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
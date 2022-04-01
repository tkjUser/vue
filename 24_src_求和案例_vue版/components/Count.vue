<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>  <!--模板里面可以看到vc身上的所有东西，不用写this.$store-->
<!--    <h1>当前求和放大10倍为：{{dahe}}</h1>-->
    <h1>当前求和放大10倍为：{{$store.state.sum*10}}</h1>
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
  export default {
    name: "Count",
    data(){
      return {
        n:1,    // 用户选择的数字，初始化为1

      }
    },
    // computed:{
    //   dahe(){
    //     return this.$store.state.sum*10
    //   }
    //
    // },
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
      console.log('Count',this)

    }

  }
</script>

<style scoped>


</style>
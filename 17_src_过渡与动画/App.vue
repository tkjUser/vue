<template>
  <div>
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>
//引入组件
import Test from "../src/components/Test";
import Test2 from "../src/components/Test2";
import Test3 from "../src/components/Test3";



export default {
  name: "App",
  components:{Test,Test2,Test3},



}
</script>




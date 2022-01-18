/*
该文件是整个项目的入口文件
*/

//import Vue from 'vue/dist/vue'  //完整版的vue
//引入Vue
import Vue from 'vue'
//引入APP组件，它是所有组件的父组件

import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

/*
关于不同版本的Vue：
  1.Vue与vue.runtime.xxx.js的区别
    （1）Vue.js包含完整版的Vue，包含：核心功能+模板解析器
    （2）vue.runtime.xxx.js是运行版的Vue，只包含核心功能，没有模板解析器
  2.因为Vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需使用render函数接收到的createElement函数去指定具体内容
**/

//创建Vue实例对象--vm
new Vue({
  //将APP组件放入容器中
  render: h => h(App),//简写形式
  /*render(createElement){   //render函数有返回值
    // console.log(typeof createElement)  //传入参数是函数createElement
    createElement('h1','hello')   //传入的是“h1”标签，需要传入标签值，若传入组件，组件本身有值，只需传组件名即可
    return createElement('h1','hello')
  },*/


  // template:'<h2>hhhh</h2>',
  /*components:{
    App,
  }*/

}).$mount('#app')

/*等价写法
new Vue({
  el:'#app',
  render: h => h(App),
})
*/


// console.log(666)

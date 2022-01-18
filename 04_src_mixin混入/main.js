//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//全局引入混合,所有的vc和vm都能得到这个混入
import {hunhe,hunhe2} from './mixin'
Vue.mixin(hunhe)
Vue.mixin(hunhe2)
//关闭Vue的生产提示
Vue.config.productionTip=false

//创建vm
new Vue({
    el:'#app',      //对应于index.html里面的id=’app‘的div标签
    render:h=>h(App)

})
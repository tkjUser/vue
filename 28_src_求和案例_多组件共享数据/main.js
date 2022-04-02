//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//引入store
import store from './store/index'

//关闭Vue的生产提示
Vue.config.productionTip=false



//创建vm
new Vue({
    el:'#app',      //对应于index.html里面的id=’app‘的div标签
    render:h=>h(App),

    store,//简写形式

    beforeCreate() {//全局事件总线
        Vue.prototype.$bus=this
    }
})

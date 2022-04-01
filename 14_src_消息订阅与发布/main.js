//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip=false


// window.x={a:1,b:2}

// VueComponent.prototype.x={a:1,b:2}

// Vue.prototype.x={a:1,b:2}

/*const demo=Vue.extend({})
const d = new demo()
Vue.prototype.x = d*/

// console.log(Vue.prototype)

//创建vm
new Vue({
    el:'#app',      //对应于index.html里面的id=’app‘的div标签
    render:h=>h(App),



})
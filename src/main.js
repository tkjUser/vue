//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//引入ElementUi组件库（完整引入）
// import ElementUI from 'element-ui';
//引入ElementUi的全部样式(引入全部样式会使得文件体积变得很大)
// import 'element-ui/lib/theme-chalk/index.css';

// ElementUi按需引入
import { Button, Row , DatePicker } from 'element-ui';


//关闭Vue的生产提示
Vue.config.productionTip=false

//应用插件（这里是使用所有ElementUi的组件，总共一百多个，会使得文件体积变得很大）
// Vue.use(ElementUI)

// Vue.component(Button.name, Button);// 注册组件
Vue.component('atguigu-button', Button);  // 注册组件,使用自定义的组件名
Vue.component('atguigu-row', Row);
Vue.component('atguigu-picker', DatePicker);

//创建vm
new Vue({
    el: '#app',      //对应于index.html里面的id=’app‘的div标签
    render: h => h(App),

})




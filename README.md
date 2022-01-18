#笔记
/*  APP.vue文件
该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue'
//引入APP组件，它是所有组件的父组件
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
//创建Vue实例对象--vm
new Vue({
//将APP组件放入容器中
render: h => h(App),
}).$mount('#app')
/*等价写法
new Vue({
el:'#app',
render: h => h(App),
})
*/

## ref属性
1.被用来给元素或子组件组测引用信息（id的替代者）.
2.应用在html标签上获取的是真实的DOM元素，应用在组件标签上的是组件实例对象（vc）
3.使用方法：
    打标识：<h1 ref="xxx">...</h1>  或  <school ref="xxx"><school/>
    获取：this.$refs.xxx

## 配置项props（properties的缩写）

功能：让组件能接收外部传过来的数据，方便组件复用，组件只需写好框架，具体的数据可以在使用时传入
    props和methods，data同级目录下
（1）传递数据：
        <Demo name='xxx'/>
（2）接收数据：
        第一种方式（只接受）：
        props:['name']
        第二种方式(限制传入类型)：
        props:{
            name:Number
        }
        第三种方式（限制类型，限制必要性，指定默认值）：
        props:{
            name:{
                type:String,
                required:true,//必要性
                default:'老王',
            }
        }
备注:props是只读的，Vue底层会检测你对props的修改。如果进行了修改会发出警告；
    若业务需求确实需要修改，请复制props的内容到data中一份，然后去修改data中的数据并呈现data中的数据

## mixin(混入)
功能：可以把多个组件共用的配置提取成一个混入对象
使用方式：
    第一步定义混入：
        例如：{
                data(){...} 
                methods:{...}
             }
    第二步使用混入:
        例如:(1)全局混入：Vue.mixin(xxx)
`           (2)局部混入：mixins:['xxx']
##插件
功能:用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
定义插件：
    对象.install = function(Vue,option){
        //1.添加全局过滤器
        Vue.filter(...)
        //2.添加全局指令
        Vue.directive(...)
        //3.配置全局混入
        Vue.mixin(...)
        //4.添加实例方法
        Vue.prototype.$myMethod=function(){...}
        Vue.prototype.$myProperty=xxx
    }
    //在main.js中使用
    使用插件:Vue.use(plugins,option)
##scoped样式
作用：让样式在局部生效，防止冲突
写法：<style scoped>

#webStorage
1.存储内容大小一般支持5MB左右（不同浏览器可能不同）
2.浏览器端通过Windows.sessionStorage和Windows.localStorage属性来实现本地存储机制
3.相关API：
    （1）xxxxStorage.setItem('key','value');
        该方法可接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在则更新其对应的值
    （2）xxxxStorage.getItem('key');
        该方法接收一个键名作为参数，返回键名对应的值
    （3）xxxxStorage.removeItem('key');
        该方法接收一个键名作为参数，并把该键名从存储中删除
    （4）xxxxStorage.clear();
        该方法会清空存储中的所有数据
4.备注：
    （1）SessionStorage存储的内容会随着浏览器窗口的关闭而消失
    （2）LocalStorage存储的内容需要手动清除才会消失
    （3）xxxxStorage.getItem('key')如果对应key的value获取不到，则返回值是null
    （4）JSON.parse(null)的结果依然是null
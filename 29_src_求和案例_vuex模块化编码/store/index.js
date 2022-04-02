//该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from "vue";
//引入vuex
import Vuex from 'vuex'
import countOptions from './count'     //把模块单独写在一个文件中，然后导入
import personOptions from './person'

//使用插件
Vue.use(Vuex)


/*//准备actions：用于响应组件中的动作
const actions={
    //add只是单纯的把数据传给mutations，可以省略，直接在组件中调用store的commit方法
    /!*add(context,value){ // add:function()，简写了
        context.commit('ADD',value)   // 这里一般把运算方法写成大写，来区分actions和mutations里面的运算
        console.log('actions中的add被执行了！')
    },*!/

    // 如果sub函数的业务代码太过复杂，则不宜写在一个函数中，而是分成多个函数，通过context传递

}
//准备mutations：用于操作数据
const mutations={


}
//准备state：用于存储数据
const state={


}
//准备getters：用于将state中的数据进行加工
const getters = {

}*/

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,   // 前面的是模块别名，后面是对应模块
        personAbout:personOptions
    }

})





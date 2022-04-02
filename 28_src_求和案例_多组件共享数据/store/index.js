//该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from "vue";
//引入vuex
import Vuex from 'vuex'
//使用插件
Vue.use(Vuex)

//准备actions：用于响应组件中的动作
const actions={
    //add只是单纯的把数据传给mutations，可以省略，直接在组件中调用store的commit方法
    /*add(context,value){ // add:function()，简写了
        context.commit('ADD',value)   // 这里一般把运算方法写成大写，来区分actions和mutations里面的运算
        console.log('actions中的add被执行了！')
    },*/

    // 如果sub函数的业务代码太过复杂，则不宜写在一个函数中，而是分成多个函数，通过context传递
    sub(context,value) { //这里的cntext可以看作一个简略版的store，里面有dispatch，commit，state等
        //context.commit('SUB',value)
        console.log('处理了一些事情--sub')
        context.dispatch('demo1', value)  //不commit，而是dispatch
    },
    demo1(context,value){
        console.log('处理了一些事情--demo1')
        context.dispatch('demo2', value)
    },
    demo2(context,value){
        console.log('处理了一些事情--demo2')
        context.commit('SUB',value)
    },

    addOdd(context,value){
        if(context.state.sum%2){    // context里面包含了当前的state
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            context.commit('ADD',value)
        },500)
    },
}
//准备mutations：用于操作数据
const mutations={
    ADD(state, value) {  // 大写为了区分dispatch中的方法
        console.log('mutations里面的ADD被调用了')
        // console.log('$$$$$$',value)
        state.sum+=value
    },
    SUB(state, value) {
        // console.log('mutations里面的ADD被调用了')
        state.sum-=value
    },
    ADD_PERSON(state,value){
        console.log('mutations里面的ADD_PERSON被调用了')
        state.personList.unshift(value)
    }
}
//准备state：用于存储数据
const state={
    sum:0,   // 当前的和
    school:'尚硅谷',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}

//准备getters：用于将state中的数据进行加工
const getters = {
    bigSum(state){  // 传入的参数是state，对其数据进行加工
        return state.sum*10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,  // actions:actions,对象名和对象值重名，可以简写
    mutations,
    state,
    getters
})





// 求和功能相关的配置
const countOptions={
    namespaced:true,  // 为true时开启命名空间，在组件里面可以简写
    actions:{
        sub(context,value) {
            //这里的cntext可以看作一个简略版的store，里面有dispatch，commit，state等
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
    },
    mutations:{
        ADD(state, value) {  // 大写为了区分dispatch中的方法
            console.log('mutations里面的ADD被调用了')
            // console.log('$$$$$$',value)
            state.sum+=value
        },
        SUB(state, value) {
            // console.log('mutations里面的ADD被调用了')
            state.sum-=value
        },
    },
    state:{
        sum:0,   // 当前的和
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){  // 传入的参数是state，对其数据进行加工
            return state.sum*10
        }
    }
}

export default countOptions
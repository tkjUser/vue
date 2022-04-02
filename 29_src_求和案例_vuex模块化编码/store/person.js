// 人员管理功能相关的配置
import axios from 'axios'
import {nanoid} from "nanoid";
const personOptions={
    namespaced:true,  //开启命名空间
    actions:{
        addPersonWang(context,value){  //添加姓王的人
            if(value.name.indexOf('王')===0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王！')
            }
        },
        addPersonServer(context){ // 从服务器要数据，这里不需要指明数据了
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations里面的ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}

export default personOptions
//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";  // 引入VueRouter

//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// 创建一个路由
export default new VueRouter({
    routes:[
        {
            name:'guanyu',         // 给路由指定名字
            path:'/about',         // 一级路由的路径需要加“/”
            component:About
        },
        {
            path:'/home',
            component:Home,
            // 二级路由
            children:[             // 关键字“children”用来说明二级路由
                {
                    path:'news',    // 二级路由不用加“/”，因为一级路由已经加过了，系统会自动给加“/”
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[     // 三级路由
                        {
                            name:'xiangqing',
                            path:'detail', // 使用占位符声明接收params参数
                            component:Detail,

                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            /*props:{
                                a:1,
                                b:'hello'
                            }*/

                            //props的第二种写法，值为布尔值，若布尔值为真，
                            //就会把该路由组件接收到的所有params参数，以props的形式传给Detail组件
                            //props:true     //这种方式对query方式无效

                            //props第三种写法，值为函数
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }
                            /*props({query:{id,title}}){  //解构赋值的连续写法
                                return {id,title}
                            }*/


                        }
                    ]
                }
                ]
        },
    ]

})


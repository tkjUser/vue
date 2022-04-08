//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";  // 引入VueRouter

//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// 创建一个路由
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:'guanyu',         // 给路由指定名字，“关于”
            path:'/about',         // 一级路由的路径需要加“/”
            component:About,
            meta:{
                title:'关于',
                isAuth:true,
            },
        },
        {
            name:'zhuye',     //“主页”
            path:'/home',
            component:Home,
            meta:{
                title:'主页'
            },
            // 二级路由
            children:[             // 关键字“children”用来说明二级路由
                {
                    name:'xinwen',  //”新闻“
                    path:'news',    // 二级路由不用加“/”，因为一级路由已经加过了，系统会自动给加“/”
                    component:News,
                    meta:{
                        isAuth:true,
                        title:'新闻'
                    },
                    /*beforeEnter(to,from,next){
                        if(to.meta.isAuth){ //判断是否需要鉴定权限
                            // 这里是事先再浏览器本地存储里输入了key为”school“，value为”atguigu“的键值对来模拟有权限的用户
                            if(localStorage.getItem('school')==='atguigu'){
                                next()  //放行
                            }else{
                                alert('学校名不对，无权限查看')
                            }
                        }else{
                            next() //放行
                        }
                    }*/
                },
                {
                    name:'xiaoxi',  //“消息”
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth:true,
                        title:'消息'
                    },
                    children:[     // 三级路由
                        {
                            name:'xiangqing', //”详情“
                            path:'detail', // 使用占位符声明接收params参数
                            component:Detail,
                            meta:{
                                isAuth:true,
                                title:'详情'
                            },

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

// 全局前置路由守卫---初始化，每次路由切换前被调用
/*
router.beforeEach((to,from,next)=>{
    // console.log('前置路由守卫',to,from,next)
    if(to.meta.isAuth){ //判断是否需要鉴定权限
        // 这里是事先再浏览器本地存储里输入了key为”school“，value为”atguigu“的键值对来模拟有权限的用户
        if(localStorage.getItem('school')==='atguigu'){
            next()  //放行
        }else{
            alert('学校名不对，无权限查看')
        }
    }else{
        next() //放行
    }
})
*/

// 全局后置路由守卫---初始化，每次路由切换后被调用
/*router.afterEach((to,from)=>{
    // console.log('后置路由守卫',to,from)
    // 每次路由切换后把浏览器对应页面的标题栏改了（若是新页面因为用户权限不够而不能跳转，则不更新标题栏）
    // document.title = to.meta.title || '硅谷系统'  //
    if(to.meta.title){
        document.title=to.meta.title
    }else{
        document.title='vue_test'
    }

})*/

//暴露路由
export default router


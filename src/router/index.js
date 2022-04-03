//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";  // 引入VueRouter

//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";

// 创建一个路由
export default new VueRouter({
    routes:[
        {
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
                }
                ]
        },
    ]

})


//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";  // 引入VueRouter

//引入组件
import About from "../pages/About";
import Home from "../pages/Home";


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

        },
    ]

})


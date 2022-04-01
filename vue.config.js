module.exports = {
    /*pages: {
        index: {
            // page 的入口
            entry: 'src/index/main.js',
        }
    },*/
    lintOnSave:false,    //关闭语法检查
    // 开启代理服务器（方式一）
    /*devServer: {
        proxy: 'http://localhost:5000' // 指向目标服务器
    },*/
    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/atguigu': {    //“/atguigu”表示请求前缀，与浏览器的前缀相同时走代理，不同时不走代理
                target: 'http://localhost:5000',        //target表示目标服务器地址
                pathRewrite:{   //重写路径，该对象包含一个key和一个value，key是正则表达式，value是要替换的值
                    '^/atguigu':''      // 这里把“/atguigu”替换成空字符串
                },
                ws: true,      // 用于支持websocket
                changeOrigin: false    // 用于空值请求头中的host值，为true时代理服务器如实告诉服务器请求的来源，为false时撒谎
            },
            '/demo': {    //“/atguigu”表示请求前缀，与浏览器的前缀相同时走代理，不同时不走代理
                target: 'http://localhost:5001',        //target表示目标服务器地址
                pathRewrite:{   //重写路径，该对象包含一个key和一个value，key是正则表达式，value是要替换的值
                    '^/demo':''      // 这里把“/atguigu”替换成空字符串
                },
                ws: true,      // 用于支持websocket
                changeOrigin: false    // 用于空值请求头中的host值，为true时代理服务器如实告诉服务器请求的来源，为false时撒谎
            },
            // '^/foo': {
            //     target: '<other_url>'
            // }
        }
    }
}
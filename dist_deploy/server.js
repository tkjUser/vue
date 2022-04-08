const express = require('express')  // commonjs规范的引入格式
const history = require('connect-history-api-fallback')

const app = express()

app.use(history())
app.use(express.static(__dirname+'/static'))  //指定使用静态资源的位置

app.get('/person',(req,res)=>{
    res.send({
        name:'tom',
        age:18
    })
})

app.listen(5005,(err)=>{
    if(!err)
        console.log('服务器启动成功了！')

})
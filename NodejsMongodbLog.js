const express = require("express")
const app = express()
const ejs = require("ejs")
const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910802');

const schema = {
    name: String,
    age: Number,
    health:String,
    hobby:String
}
const Cat = mongoose.model('cat1s', schema);
// const kitty = new Cat({ name: 'testZildjian1' });
// kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    // res.send(req.query)
    console.log(req.query)
    const kitty = new Cat({ name: req.query.first,health : req.query.second });
    kitty.save()
    ejs.renderFile("result.html",{returnValue:"success"},(err,str)=>{
        res.send(str)
    })
    // res.send(req.body)
    // console.log(req.body)
    // res.end()
})
// app.get("/",(req,res)=>{
//     res.send("hello")
// })
app.listen(1802)
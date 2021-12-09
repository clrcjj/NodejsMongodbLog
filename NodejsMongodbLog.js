const express = require("express")
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');

const schema = {
    name: String,
    age: Number,
    health:String,
    hobby:String
}
const Cat = mongoose.model('cat1s', schema);
const kitty = new Cat({ name: 'testZildjian1' });
kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    // res.send(req.query)
    // console.log(req.query)
    res.send(req.body)
    console.log(req.body)
    // res.end()
})
// app.get("/",(req,res)=>{
//     res.send("hello")
// })
app.listen(1802)
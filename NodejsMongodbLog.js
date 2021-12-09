const express = require("express")
const app = express()
app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
})
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(1802)
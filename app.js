var express = require("express")
var app = express()
app.get('/', (req,res)=>res.send('teste casa strey teste'))
app.listen(3000,()=>console.log("App rodando na porta 3000"))
const express = require('express')
const app = express()
const {PORT = 3000 } = process.env
console.log('Port',PORT)

app.get("/",function (req,res){
    res.sendFile(__dirname+'/index.html');
    });

app.listen(PORT,()=>
    console.log('Example app listening at http://localhost:3000')
)
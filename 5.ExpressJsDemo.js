//to use express we need to install express first
//npm install express
//and run with node filename.js
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || 8080;

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'hello.html'));
})

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname,'about.html'));
})

app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname,'login.html'));
})

app.get('/register',function(req,res){
    res.sendFile(path.join(__dirname,'register.html'));
})
app.listen(port);
console.log('our server started at port: '+port);

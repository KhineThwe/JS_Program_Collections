const express = require('express')

const path = require('path')

const router = express.Router();

const app = express();

const port = process.env.port || 8080;

router.use(function(req,res,next){

  console.log(req.method,req.url);

if(req.url == "/hellomyanmar"){
    res.sendFile("Hello");
}
  next();
})

router.get('/',function(req,res){
    res.send('This is main : ');
})

router.get('/about',function(req,res){
    res.send('This is about : ');
})
app.use('/',router);
app.listen(port);
console.log('our server started at port: '+port);

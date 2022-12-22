const express = require('express')

const path = require('path')

const router = express.Router();

const app = express();

const port = process.env.port || 8080;

router.param('name',function(req,res,next,name){

  console.log('some validationson'+name);

  req.name = name;

  if(name == "khine"){
    res.send("You are valid: ");
  }else{
    res.send("You are not valid: ");
  }
  next();
})

router.get('/hello/:name',function(req,res){
    res.send('This is main : '+req.name);
})
app.use('/',router);
app.listen(port);
console.log('our server started at port: '+port);

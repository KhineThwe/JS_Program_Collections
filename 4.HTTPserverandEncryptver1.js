
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  var q = url.parse(req.url, true).query;
 
  var name ="mgmg";
  var pass = "khine";

  var username = q.username;
  var password = q.password; 
  var profile = "this is your profile : "+username;

  console.log(username);
  console.log(password)

  if( name == username && password == pass){ // masfgasdmsdfg

   


    let encryptedData="";
    for(let i=0; i<password.length ; i++){

    
        encryptedData+=password[i]; 

    for(let x=0; x<3 ; x++){
        let rand = Math.floor((Math.random() * 26) + 97);
        let myRand = String.fromCharCode(rand);
        encryptedData+=myRand;

    }
    
}

    res.end(encryptedData);
    console.log(encryptedData);
  }else{
    
    res.end("TryAgain");
  }


}).listen(8080);

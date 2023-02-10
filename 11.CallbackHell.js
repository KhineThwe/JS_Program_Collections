const getTodos = (resource,callback) =>{
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange',()=>{
    //console.log(request,request.readyState);
    //json looks like array or object
    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText);
      //Json string into js obj
      callback(undefined,data);
    }else if(request.readyState === 4){
      callback('Could not fetch data',undefined);
    }
  })
  request.open('GET',resource);
  request.send();
};

getTodos('todos/khine.json',(err,data)=>{
  console.log(data);
  getTodos('todos/thwe.json',(err,data)=>{
    console.log(data);
    getTodos('todos/zar.json',(err,data)=>{
      console.log(data);
    })
  })
});

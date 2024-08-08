// node Create server

// node js run in postman tool

var port=5000;
var http = require ("http");
const url = require ("url");

//use http wth create server


http.createServer{
    (req,res)=>{
        if(url=="/"){
            res.write("<h1>hello world</h1>")
            res.end()
        
        }else if(url =="/home"){
            res.write("<h1>Home page</h1>")
            res.end()
        }    
    }
}
.listen(port, () => {
      
})


var express=require("express");
var server = express();
var port =5000;


server.get("/",(req,res)=>{
    res.status(200).send("hello world")
})


server.listen(port,()=>{
    console.log("server is running.....");
})


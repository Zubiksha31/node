
//variable=value
//String "   "   '   '
//Number  0 to 9
//name="kabelan"
//Boolean true r false
//array  [1,true]

//BigInt //biggg numberr
//null//empty space

 var a=null;  Or
// var a=data(null); 
var b=undefined;
//undefined


function data(){
var a=10;
var b=20;
//console.log(a+b)
}


 function data(a,b){
    //var a=10;
    //var b=20;
    //console.log(a+b)
    }
    
    data(3,4)

 
    //assignment operators =,+=,-=
    //arthimetic operators =,-,*,%,/
    //logical operators &,||,!
    //comparsion operators ==,===,!=,!==
    //ternary  if-else

    var a=40>100?console.log(true):console.log(false);
    

    array=[1,2,3,4,5]
    //callback

    array.map(function(data){
      console.log(data);
    })

    var a=array.map(function(data){
        return data*2;
    })
    console.log(a);

    var a=array.filter(function(data){
        return data>2;
    })
    console.log(a);

    var a=array.find(function(data){
        return data>2;
    })
    console.log(a);

    //oru func ula enoru fun a argument la call  pandrathu tha call back
  
  //filter

  array.filter(function(data){
      console.log(data>2);
  })
//   O/p: will be:
//   false or true based on conditons

for(i=0;i<=5;i++){
  console.log(i);
}
while (i<=5) {
  console.log(i);
  i++;
}
  //   O/p: will be: 0 to 5


function sum(a,b){
    console.log(a+b);
 }   
 sum(3,function(){
    return 6-3}
)
//   O/p: will be: 6

const sum=(a,b) =>{
    console.log(a+b);
}
sum(5,5)

// or
const sum=(a,b) =>{
   console.log(a+b);
}
sum(5, function() {
    return 4-3
}) 

  //map
  //find

  //function sum(a,b) {
    //console.log(a+b);
    
  //}
  //sum(5,()=>{return.6-3})//a=5,b=3

//arrow function
  //const sum=(a,b)=>{
    //console.log(a+b);
  //}
    //sum(5,5)

    //advanced js
    //promise
    var promise = new Promise((succ, fail) => {
      succ("yes")
  })
  
  console.log(promise);
      
    
    //async -await
    async function hi() {
      var result = await promise;
      console.log(result);
  }
  
  data()
  

    //fetch method

    


    //exception handling

    //event handling
    function clicking() {
      alert("hello you")
    }
    

    //api

  // node Create server

// node js run in postman tool

var port=5000;
var http = require ("http");
const url = require ("url");

//use http wth create server


// http.createServer{
//     (req,res)=>{
//         if(url=="/"){
//             res.write("<h1>hello world</h1>")
//             res.end()
        
//         }else if(url =="/home"){
//             res.write("<h1>Home page</h1>")
//             res.end()
//         }    
//     }
// }.listen(port, () => {
//   console.log(`Server running on port ${port}`
// })


var express=require("express");
var server = express();
var port =5000;


server.get("/",(req,res)=>{
    res.status(200).send("hello world")
})


server.listen(port,()=>{
    console.log("server is running.....");
})




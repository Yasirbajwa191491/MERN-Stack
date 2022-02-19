// const http=require('http');
// const url=require('url');
// const fs=require("fs");
// const requests = require('requests');
const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.write("<h1>hello to the express world</h1>");  // for multiple you will use res.write 
    res.write("<h1>hello to the express world</h1>");
    res.send();
});
app.get("/contact",(req,res)=>{
    res.status(200).send("contact page");
});
app.get("/api",(req,res)=>{
    res.json([{  //res.json will convert automatically non-object data into json
        id:1,
        name:"yasir",
    },{
        id:1,
        name:"yasir",
    },{
        id:1,
        name:"yasir",
    }]);
});
app.get("*",(req,res)=>{
    res.status(404).send("404 Error page");
});
app.listen(8000,()=>{
    console.log("listening to the port 80000");
})

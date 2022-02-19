// const http=require('http');
// const url=require('url');
// const fs=require("fs");
// const requests = require('requests');
const path=require("path")
const express=require("express");

const app=express();

const filePath=path.join(__dirname,"/public");
console.log(filePath);
const myApp=app.use(express.static(filePath));
app.get("/",(req,res)=>{
   res.send("hello wold");
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

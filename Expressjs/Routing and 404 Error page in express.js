// const http=require('http');
// const url=require('url');
// const fs=require("fs");
// const requests = require('requests');
const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hello to the express world");
});
app.get("/contact",(req,res)=>{
    res.status(200).send("contact page");
});
app.get("*",(req,res)=>{
    res.status(404).send("404 Error page");
});
app.listen(8000,()=>{
    console.log("listening to the port 80000");
})

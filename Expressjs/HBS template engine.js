const express=require("express");
const path=require("path");
const app=express();

app.set("view engine","hbs");
//  const pathFile=path.join(__dirname,"/public");
//  app.use(express.static(pathFile))
app.get("/",(req,res)=>{
    res.render("index",{
        myname: "Yasir Sohail",
        name:"love"
    });
})
app.get("/",(req,res)=>{
    res.send("hello wold");
})

app.listen(8000,()=>{
    console.log("listening using port 8000");
})
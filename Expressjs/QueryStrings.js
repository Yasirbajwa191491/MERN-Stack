const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();

const pathFile=path.join(__dirname,"/public");
const path2=path.join(__dirname,"/Expressjs/src");
app.set("view engine","hbs");
  hbs.registerPartials(path2)
  app.use(express.static(pathFile))
app.get("/about",(req,res)=>{
    console.log(req.query);
    res.render("index",{
        myname: req.query.name,
        name: req.query.id,
    });
})
app.get("/",(req,res)=>{
    
    res.send("hello wold");
})
app.get("*",(req,res)=>{
    res.status(404).render("404");
});
app.listen(8000,()=>{
    console.log("listening using port 8000");
})
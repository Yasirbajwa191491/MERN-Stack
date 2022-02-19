const express=require("express");
const async = require("hbs/lib/async");
require("./MongoDB/RestfulApi/Connection");
const User=require("./MongoDB/RestfulApi/Model");
const app=express();
const port=8000;

app.use(express.json());
app.get("/",(req,res)=>{
  res.send("home page")
})
app.get("/users",async(req,res)=>{
  try{
 const data=await User.find();
 res.status(201).send(data);
  }catch(err){
    res.status(404).send(err);
  }
})
// app.get("/users/:id",async(req,res)=>{
//   try{
//     const id=req.params.id;
//  const data=await User.findById({_id:id});
//  if(!data){
//    res.status(404).send();
//  }else{
//   res.status(201).send(data);
//  }

//   }catch(err){
//     res.status(404).send(err);
//   }
// })
app.get("/users/:name",async(req,res)=>{
  try{
    const name=req.params.name;
 const data=await User.find({name});
 if(!data){
   res.status(404).send();
 }else{
  res.status(201).send(data);
 }

  }catch(err){
    res.status(404).send(err);
  }
})

app.post("/users",async(req,res)=>{
    try{
      console.log(req.body);
      const Student= new User(req.body);
      const newUser=await Student.save();
        res.status(201).send(newUser);
    }
    catch(err){
   res.status(400).send(err);
    }
})
app.delete("/users/:id",async(req,res)=>{
    try{
      console.log(req.body);
      const id=req.params.id;
      const data=await User.deleteMany({_id:id});
      if(!data){
        res.status(404).send();
      }else{
       res.status(201).send(data);
      }
    }
    catch(err){
   res.status(400).send(err);
    }
})
app.patch("/users/:id",async(req,res)=>{
    try{
      console.log(req.body);
      const _id=req.params.id;
      const data=await User.findByIdAndUpdate(_id,req.body,{
        new:true
      });
      if(!data){
        res.status(404).send();
      }else{
       res.status(201).send(data);
      }
    }
    catch(err){
   res.status(400).send(err);
    }
})

app.listen(port,()=>{
  console.log(`listening at the port ${port}`);
})
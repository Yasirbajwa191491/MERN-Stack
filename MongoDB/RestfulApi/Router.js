const express=require("express");
const User=require("../RestfulApi/Model");
const router=new express.Router()

router.get("/",(req,res)=>{
    res.send("home page")
  })
  router.get("/users",async(req,res)=>{
    try{
   const data=await User.find();
   res.status(201).send(data);
    }catch(err){
      res.status(404).send(err);
    }
  })
  // router.get("/users/:id",async(req,res)=>{
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
  router.get("/users/:name",async(req,res)=>{
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
  
  router.post("/users",async(req,res)=>{
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
  router.delete("/users/:id",async(req,res)=>{
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
  router.patch("/users/:id",async(req,res)=>{
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

  module.exports=router;
  

//   const express=require("express");
// const async = require("hbs/lib/async");
// require("./MongoDB/RestfulApi/Connection");
// const router=require("./MongoDB/RestfulApi/Router");
// const app=express();
// const port=process.env.Port || 8000;

// app.use(express.json());
//  app.use(router);

// app.listen(port,()=>{
//   console.log(`listening at the port ${port}`);
// })
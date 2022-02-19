const User=require("../Mernstack/Schema");
const mongoose=require("mongoose");
const express=require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const async = require("hbs/lib/async");
const router=express.Router();
const authenticate=require("./authenticate");

const cookieParser=require("cookie-parser");

router.use(cookieParser());

router.get("/about",authenticate,(req,res)=>{
    res.send(req.rootUser);
})

router.get("/getData",authenticate,(req,res)=>{
    res.send(req.rootUser);
})
router.get("/users",(req,res)=>{
    res.send("router");
})
router.post("/contact",authenticate,async(req,res)=>{
    const {name,email,message}=req.body;
    try{
   if(!name || !email || !message){
     return  res.json({error:"Please fill the contact form"})
   }
   const contact=await User.findOne({_id:req.id});
   console.log(contact);
   if(contact){
       const userMessage=await contact.addMessage(name,email,message);
       await userMessage.save();
       res.status(201).json({message:"Message sent successfully"});
   }

    }catch(err){
        console.log(err);
         res.status(201).send({err: "Message not send"});
    }
})
router.post("/registration",async(req,res)=>{
    const {name,email,phone,address,password,cpassword}=req.body;
    try{
if(!name || !email || !phone || !address || !password || !cpassword ){
    return res.status(422).json({ error: "Please filled the field properly"})
}
    const data=await User.findOne({email:email})
         if(data){
        return res.status(422).json({ error: "Email already exist"})
         }else if(password !==cpassword){
            return res.status(422).json({ error: "Password are not matching"})
         }
        const user=new User({name,email,phone,address,password,cpassword});
        const token=await user.generateAuthToken();
        console.log(token);
        await user.save();
         res.status(201).json({message: "User registered successfully"})
        }
    catch(err){
        res.status(500).send({err: "Failed to registered"});
    }

})
router.post("/signin",async(req,res)=>{
    const {email,password}=req.body;
    try{
        if(!email || !password){
            return res.status(400).json({ error: "Please filled the field properly"})
        }
            const data=await User.findOne({email:email})
            if(!data){
                return res.status(400).json({ error: "Email not matching"})
                 }else{
                    const verify=await bcrypt.compare(password,data.password);
                    const token=await data.generateAuthToken();
                    console.log(token);
                    res.cookie("jwttoken",token,{
                        expires: new Date(Date.now()+3000000),//25892000000 means expires after one month
                       httpOnly: true
                    })
                    if(verify){
                   return res.status(201).json({message: "Login sucessfully"})
                    }else{
                       return res.status(400).json({error: "invalid login details"})
                    }
   
                 }
                }catch(err){
        res.status(500).send({err: "invalid login details"});
    }
})
router.get("/logout",authenticate,async(req,res)=>{
    req.rootUser.tokens=req.rootUser.tokens.filter((elem)=>{
        return elem.token !==req.token;
    })
    // req.rootUser.tokens=[];   //for logout all
    res.clearCookie("jwttoken");
    await req.rootUser.save();
    res.status(200).send("User logout");
})
module.exports=router;
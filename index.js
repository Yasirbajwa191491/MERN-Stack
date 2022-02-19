require('dotenv').config()
const express=require("express");
const bcrypt=require("bcrypt");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const async = require("hbs/lib/async");
const app=express();
require("./MongoDB/RestfulApi/Connection");
const port=process.env.Port ||8000;

app.use(express.json());
app.use(require("./Mernstack/Router"));  //router
app.get("/",(req,res)=>{
  res.send("Main Page");
})

app.listen(port,()=>{
  console.log(`listening at the port ${port}`);
})
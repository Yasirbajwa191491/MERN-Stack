const jwt=require("jsonwebtoken");

const createToken=async ()=>{
    const token=await jwt.sign({_id: "61f3f094b74e00bf6ef86c16"},"mynameisyasirsohailandilove",{
      expiresIn:"1h"   //expire date
    });
    console.log(token);
    const verify=await jwt.verify(token,"mynameisyasirsohailandilove");
    console.log(verify);
  }
  createToken();
const jwt=require("jsonwebtoken");
const User=require("./Schema");


const authenticate=async(req,res,next)=>{
try{
const token=req.cookies.jwttoken;
const verify=jwt.verify(token,process.env.SECRET_KEY);

const rootUser=await User.findOne({_id:verify._id,"tokens.token":token});
if(!rootUser){
    throw new Error("User not found");
}else{
    req.token=token;
    req.rootUser=rootUser;
    req.id=rootUser._id;
    next();
}
}catch(error){
    res.status(401).send("Unauthorized: no token found");
}
}
module.exports=authenticate;
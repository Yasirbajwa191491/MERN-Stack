const async = require("hbs/lib/async");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const validatornpm=require("validator");
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        minlength: [3,"username should contain atleast 3 characters"],
        maxlength: [40,"username cannot larger than 40 characters"],
       } ,
       email:{
           type: String,
           required: true,
           unique: [true, "Email adress is already present"],
           validate:{
               validator:function(val){
                   return validatornpm.isEmail(val)
               },
               message:"Please enter valid email"
           }
       },
       phone:{
           type: Number,
           min: 11,
       },
       address:{
           type: String,
           minlength: 5
       },
       password:{
           type: String,
           min: [5,"password should countains atleast 7 characters"],
           required: true,
           trim: true
       },
       cpassword:{
        type: String,
        min: [5,"password should countains atleast 7 characters"],
        trim: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    messages:[
          { name:{
            type: String,
            minlength: [3,"username should contain atleast 3 characters"],
            maxlength: [40,"username cannot larger than 40 characters"],
             } ,
           email:{
               type: String,
               required: true,
               unique: [true, "Email adress is already present"],
               validate:{
                   validator:function(val){
                       return validatornpm.isEmail(val)
                   },
                   message:"Please enter valid email"
               }
           },
           message:{
               type: String,
               trim: true
           }
        }
    ]
    ,tokens:[
        {
            token:{
                type:String,
                trim: true
            }
        }
    ]
   
})
userSchema.pre("save",async function(next){
      if(this.isModified("password")){
         this.password=await bcrypt.hash(this.password,12);
         this.cpassword=await bcrypt.hash(this.cpassword,12);
         }
         next();
})
//store message
userSchema.methods.addMessage=async function(name,email,message){
    try{
this.messages=this.messages.concat({name,email,message});
await this.save();
return this.messages;
    }catch(err){
        console.log(err);
    }
}
//generating token
userSchema.methods.generateAuthToken=async function(){
    try{
   const token=jwt.sign({_id: this.id},process.env.SECRET_KEY);
   this.tokens=this.tokens.concat({token: token});
   await this.save()
   return token;
    }catch(err){
        console.log(err);
    }
}

const User=new mongoose.model("User",userSchema);

module.exports=User;

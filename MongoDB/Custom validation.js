const async = require("hbs/lib/async");
const mongoose=require("mongoose");
const validatornpm=require("validator");
mongoose.connect("mongodb://localhost:27017/yasirdatabase",{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connection successull")).catch((err)=>console.log(err));

// structure of Collection
const schemaPlaylist =new mongoose.Schema({
  id: {
      type: Number,
      required: true,
    //   unique: true,
      validate(val){
          if(val<0){
          throw new Error("id cannot be negative")
          }
      }
  },
  name: {
      type: String,
    //   lowercase: true,
    //   uppercase: true,
    trim: true,
    maxlength: 30,
    minlength: [2,"minimum 2 letters"] ,  // custom message
    enum: ["Yasir191491","yasir191491","yasir","Yasir Sohail"]   // value must be these only
  },
  framework: {
      type: String
  },
  email:{
      type: String,
      validate:{
        validator:function(val){
            return validatornpm.isEmail(val);
        },
        message:"email cannot be negative"
    }
  }
  ,
  date: {
      type: Date,
      default: Date.now
  }
 })
 const Playlist=mongoose.model("Jsframe",schemaPlaylist);

 const fun=async ()=>{
    try{
      //  const Playlist=new mongoose.model("Jsframe",schemaPlaylist);

 
        const resPlaylist=new Playlist({
            id: 13,
            name:"yasir191491",
            framework:"c++",
            email:"yascom"
        })
        
     const data=await Playlist.insertMany([resPlaylist]);
     console.log(data);
    }catch(err){
        console.log(err);
    }
}
 fun();
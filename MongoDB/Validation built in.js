const async = require("hbs/lib/async");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/yasirdatabase",{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connection successull")).catch((err)=>console.log(err));

// structure of Collection
const schemaPlaylist =new mongoose.Schema({
  id: {
      type: Number,
      required: true,
    //   unique: true,
    //   validate(value){
    //       if(value<0){
    //       throw new Error("id cannot be negative");
    //       }
    //   }
    validate:{
        validator: function(value){
            return value.length < 0
        },
        message:"id cannot be negative"
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
  date: {
      type: Date,
      default: Date.now
  }
 })
 const Playlist=new mongoose.model("Jsframe",schemaPlaylist);

 const fun=async ()=>{
    try{
      //  const Playlist=new mongoose.model("Jsframe",schemaPlaylist);

 
        const resPlaylist=new Playlist({
            id: 10,
            name:"yasir191491",
            framework:"Html"
        })
        
     const data=await Playlist.insertMany([resPlaylist]);
     console.log(data);
    }catch(err){
        console.log(err);
    }
}
 fun();
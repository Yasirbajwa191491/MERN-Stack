const async = require("hbs/lib/async");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/yasirdatabase",{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connection successull")).catch((err)=>console.log(err));

// structure of Collection
const schemaPlaylist =new mongoose.Schema({
  id: {
      type: Number,
      required: true
  },
  name: String,
  framework: String,
  date: {
      type: Date,
      default: Date.now
  }
 })

const fun=async ()=>{
    try{
        const Playlist=new mongoose.model("Jsframe",schemaPlaylist);

 
       
     const data=await Playlist.find({id:1}).select({name:1}).limit(1);
     console.log(data);
    }catch(err){
        console.log(err);
    }
}
 fun();
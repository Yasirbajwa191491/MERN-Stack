const async = require("hbs/lib/async");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/yasirdatabase",{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connection successull")).catch((err)=>console.log(err));

// structure of Collection
const schemaPlaylist =new mongoose.Schema({
  id: {
      type: Number,
      required: true,
      unique: true
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

 
        const resPlaylist=new Playlist({
            id:2,
            name:"yasir191491",
            framework:"Node js"
        })
     const data=await resPlaylist.save();
     console.log(data);
    }catch(err){
        console.log(err);
    }
}
 fun();
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

 
        const resPlaylist=new Playlist({
            id:3,
            name:"yasir191491",
            framework:"Javascript"
        })
        const res1Playlist=new Playlist({
            id:4,
            name:"yasir191491",
            framework:"React js"
        })
        const res2Playlist=new Playlist({
            id:5,
            name:"yasir191491",
            framework:"Next JS"
        })
     const data=await Playlist.insertMany([resPlaylist,res1Playlist,res2Playlist]);
     console.log(data);
    }catch(err){
        console.log(err);
    }
}
 fun();
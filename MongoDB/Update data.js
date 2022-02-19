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
 const Playlist=mongoose.model("Jsframe",schemaPlaylist);

const fun=async (_id)=>{
    try{
        
    //  const data=await Playlist.updateOne({_id:_id},
    //     {$set:
    //         {
    //             framework: "Express JS"
    //          }})
    
     const data=await Playlist.updateMany({_id:_id},
        {$set:
            {
                framework: "Express JS",
                name:"Yasir191491"
             }})
    
     console.log(data);
    }catch(err){
        console.log(err);   
    }
}
 fun("61ebf42c498bd256390a02a8");
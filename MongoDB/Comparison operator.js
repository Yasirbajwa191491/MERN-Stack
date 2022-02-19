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

 
       
    //  const data=await Playlist.
    //  find({id:{$gt:1}}).             //$gt represent greater than
    //  select({framework:1});

    //  const data=await Playlist.
    //  find({id:{$gte:1}}).             //$gte represent greater than equal
    //  select({framework:1});

    //  const data=await Playlist.
    //  find({id:{$lte:3}}).             //$lte represent less than equal
    //  select({framework:1});

    //  const data=await Playlist.
    //  find({id:{$in:[1,2]}}).             //$in represent present 
    //  select({framework:1});

     const data=await Playlist.
     find({id:{$nin:[1,2]}}).             //$in represent not  present 
     select({framework:1});

     console.log(data);
    }catch(err){
        console.log(err);     // for multiple
    }
}
 fun();
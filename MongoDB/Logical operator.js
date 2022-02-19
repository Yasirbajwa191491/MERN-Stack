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
    //  find({$or: [{id:1},{id:2}]}).             //$in represent or operator
    //  select({framework:1});

    //  const data=await Playlist.
    //  find({$and: [{id:1},{id:2}]}).             //$and represent and operator
    //  select({framework:1});

    //  const data=await Playlist.
    //  find({$not: [{id:1},{id:2}]}).             //$not represent not operator
    //  select({framework:1});

     const data=await Playlist.
     find({$nor: [{id:1},{id:2}]}).             //$nor represent nor operator
     select({framework:1});

     console.log(data);
    }catch(err){
        console.log(err);     // for multiple
    }
}
 fun();
const mongoose=require("mongoose");
const validatornpm=require("validator");
const usersPlaylist=new mongoose.Schema({
     name:{
         type: String,
         required: true,
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
            unique: true
        },
        address:{
            type: String,
            minlength: 5
        }
     
})

const User=new mongoose.model("User",usersPlaylist);

module.exports=User;
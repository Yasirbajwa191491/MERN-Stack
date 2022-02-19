const bcrypt=require("bcrypt");

bcrypt.hash("yasir1122",10,(error,data)=>{
    console.log(data);
  });
  bcrypt.compare("$2b$10$WrJZIQLvgGslttg4qT2uFeogXfobZ.qnDn/tWaZrHk3scOOpESRje","$2b$10$WrJZIQLvgGslttg4qT2uFeogXfobZ.qnDn/tWaZrHk3scOOpESRje",(error,data)=>{
    console.log(data);
  })
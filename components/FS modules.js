const fs=require("fs");

//  fs.writeFileSync("hello.txt","hello wold"); // for create and write in the file
// fs.appendFileSync("read.txt","hello to the Node js world");  // for append texts
// const buffer_data= fs.readFileSync("read.txt","utf8") //utf8 use for encoding
// console.log(buffer_data);
// console.log(buffer_data.toString());
//  fs.mkdirSync("hllo"); // for making folder

// fs.unlinkSync("hello.txt");  //for deleting file
// fs.rmdirSync("hllo"); // for removing folder
// fs.writeFile("write.txt","asynchronus wold",(error)=>{
// console.log(error);
// })
fs.readFile("write.txt","utf-8",(error,data)=>{
    console.log(data);
})
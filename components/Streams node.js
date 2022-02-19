const http=require('http');
const fs=require('fs');    
const EventEmitter=require('events');
const event=new EventEmitter();


const server=http.createServer();
server.on('request',(req,res)=>{

    //1st way to read file
    // fs.readFile("read.txt",(err,data)=>{
    //     res.end(data.toString());
    // })

    //2nd way to read file
const rstream=fs.createReadStream("Jsonfiles.json");
rstream.pipe(res);
rstream.on("error",(err)=>{
    res.end("file not found");
})

//3rd way to read file
// rstream.on('data',(chunkdata)=>{
//     res.write(chunkdata);
//     console.log(chunkdata);
// });
// rstream.on("end",()=>{
//     res.end();
// })
// rstream.on("error",(err)=>{
//     console.log(err);
//     res.end("file not found");
// })
})
server.listen(8000,"127.0.0.1");
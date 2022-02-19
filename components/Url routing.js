const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/'){
    res.end("home");}
    else{
       res.writeHead(404,{"Content-Type":"text/html"});
        res.end('<h1>404 Error Page, Page does not exist</h1>')
    }

})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening");
});

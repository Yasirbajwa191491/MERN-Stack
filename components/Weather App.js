const http=require('http');
const url=require('url');
const fs=require("fs");
const requests = require('requests');



const readFile=fs.readFileSync("index.html","utf-8");

const replaceValue=(tempValue,orgValue)=>{
let weather=tempValue.replace("{%weathercity%}",orgValue.weather[0].description);
// console.log(weather);
return weather
}
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/'){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=a2e5ae24a46f0d890524f0490fd4e59d")
        .on('data',  (chunk)=> {
          const chunkData=JSON.parse(chunk)
          const objData=[chunkData];
             console.log(objData);
             const WeatherData=objData.map((val)=>{
                return replaceValue(readFile,val)
                
                 //console.log(val.weather[0].description);
             }).join("")
             console.log(WeatherData);
             res.write(WeatherData);
        })
        .on('end',  (err) =>{
          if (err) return console.log('connection closed due to errors', err);
         res.end();
         // console.log('end');
        });
}
    else{
       res.writeHead(404,{"Content-Type":"text/html"});
        res.end('<h1>404 Error Page, Page does not exist</h1>')
    }

})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening");
});

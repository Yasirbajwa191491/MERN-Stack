const http=require('http');
const fs=require('fs');
const EventEmitter=require('events');
const event=new EventEmitter();


event.on('sayMyName',()=>{
    console.log('Yasir');
})
event.on('sayMyName',(id)=>{
    console.log(`code is ${id}`);
})
event.emit('sayMyName',200);
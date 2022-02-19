const fun=(a,b)=>{
    return a+b;
 }
 const sub=(a,b)=>{
     return a-b;
 }
 // module.exports.fun=fun;
 // module.exports.sub=sub;
 module.exports={fun,sub};  // for export
 
 //for import
 const {fun,sub}= require('./components/Test');
 console.log(sub(99,88));
 console.log(fun(99,88));
 
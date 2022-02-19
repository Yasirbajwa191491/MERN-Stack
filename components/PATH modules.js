const path=require("path");
console.log(path.dirname(`C:\Users\Administrator\reacttut\nodejs\index.js`));
console.log(path.extname('C:\Users\Administrator\reacttut\nodejs\index.js'));
console.log(path.basename('C:\Users\Administrator\reacttut\nodejs\index.js'));
console.log(path.parse('C:\Users\Administrator\reacttut\nodejs\index.js'));
const parse=path.parse('C:\Users\Administrator\reacttut\nodejs\index.js');
console.log(parse.name);
console.log(path.isAbsolute('C:\Users\Administrator\reacttut\nodejs\index.js'));
console.log(path.resolve('C:\Users\Administrator\reacttut\nodejs\index.js'));
console.log(path.posix);
console.log(path.join("nodejs","index.js"));  //for joining path together

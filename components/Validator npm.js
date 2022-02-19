var validator = require('validator');

const validate=validator.isEmail('foo@bar.com'); //=> true
console.log(validate);
const check=validator.isEmpty("oo"); //=> true
console.log(check);
const check1=validator.isJWT("ookslkskssw2"); //=> true
console.log(check1);
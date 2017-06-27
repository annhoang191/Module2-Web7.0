console.log('Include module.js');
const fs = require('fs');

/*function readFile(){
  let result = fs.readFileSync('helloworld.txt', 'utf-8');
  console.log(`read file done ${result}`);
}*/

/*ARROW FUNCTION*/
//Cant use "this" and "new" in arrow function
let readFile = (/*param*/) => {
  let result = fs.readFileSync('helloworld.txt', 'utf-8');
  console.log(`read file done ${result}`);
}

module.exports = {
  readFile
}

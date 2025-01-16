let fs = require("fs");

let input = fs.readFileSync('./data/문제1_A+B.txt').toString().split("\n");
let data = input[0].split(' ');
console.log("soure = " + data);
let result = 0;

for(let i = 0; i<data.length; i++){
  result += Number(data[i]);
}
console.log(result);

let fs = require("fs");

let input = fs.readFileSync("./data/04_exam.txt").toString().trim();
console.log(input);

let num = input.split('').sort((a,b)=>b-a).join('');

console.log(num);
let fs = require("fs");

let input = fs.readFileSync("./data/문제4_최대최소.txt").toString().split("\n");
input = input[0].split(" ").map(Number);
console.log(input);
let num = fs.readFileSync('./data/문제4_최대최소.txt')
.toString().split('\n');
num = num[1].split(" ").map(Number);
console.log(num);
let value = input[0];

num.push(value);

let maxNum = Math.max.apply(null, num);
let minNum = Math.min.apply(null, num);
console.log(maxNum);
console.log(minNum);

let fs = require("fs");

let input = fs.readFileSync("./data/세자리곱셈.txt").toString().split("\n");
console.log(input);
let a = input[0];
let b = input[1];

let x_1 = b[2];
let x_2 = b[1];
let x_3 = b[0];

console.log(Number(a) * x_1);
console.log(Number(a) * x_2);
console.log(Number(a) * x_3);
console.log(Number(a) * Number(b));

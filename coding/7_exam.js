let fs = require("fs");

let aa = fs.readFileSync("./data/문제7_평균조작.txt").toString().split("\n");
aa = aa[1].split(" ").map(Number);

let max = aa.reduce((sum , value)=>Math.max(sum , value));
console.log(max);

let per = aa.map(values => (values / max)*100);
console.log(per);

let sum = per.reduce((x , y)=> x + y ) /aa.length;
console.log(sum);





let fs = require("fs");

let aa = fs.readFileSync("./data/문제6_평균.txt").toString().split("\n");
aa = aa[1].split(" ").map(Number);
console.log(aa);

let bb = fs.readFileSync("./data/문제6_평균.txt").toString().split("\n");
bb = bb[2].split(" ").map(Number);
console.log(bb);

let cc = fs.readFileSync("./data/문제6_평균.txt").toString().split("\n");
cc = cc[3].split(" ").map(Number);
console.log(cc);

let dd = fs.readFileSync("./data/문제6_평균.txt").toString().split("\n");
dd = dd[4].split(" ").map(Number);
console.log(dd);

let ff = fs.readFileSync("./data/문제6_평균.txt").toString().split("\n");
ff = ff[5].split(" ").map(Number);
console.log(ff);

aa.shift();
sum = aa.reduce((sum, current) => sum + current) / aa.length;
console.log(sum);
let vauless = aa.filter((value) => value < sum);
console.log(vauless);
let per = (vauless.length / aa.length) * 100;
// console.log(per.toFixed(3) + "%");


bb.shift();
sum1 = bb.reduce((sum1 , current)=> sum1 + current) / bb.length;
console.log(sum1);
let val1 = bb.filter((value)=> value > sum1);
console.log(val1);
let per1 = (val1.length / bb.length) * 100;
// console.log(per1.toFixed(3) + '%');

cc.shift();
sum2 = cc.reduce((sum2 , int)=> sum2 + int ,0) / cc.length;
console.log(sum2);
let val2 = cc.filter((value)=> value > sum2);
console.log(val2);
let per2 = (val2.length / cc.length ) * 100;
// console.log(per2.toFixed(3) + '%');

dd.shift();
sum3 = dd.reduce((sum3 , current)=> sum3 + current) / dd.length;
console.log('sum3 : ' + sum3);
let val3 = dd.filter((value)=> value > sum3);
console.log(val3);
let per3 = (val3.length / dd.length) * 100;
// console.log(per3.toFixed(3) + '%');

ff.shift();
sum4 = ff.reduce(( sum4 , value )=> sum4 + value) / ff.length;
let val4 = ff.filter((value)=> value > sum4);
let per4 = (val4.length / ff.length)*100;
// console.log(per4.toFixed(3) + '%');

console.log(per.toFixed(3) + "%");
console.log(per1.toFixed(3) + '%');
console.log(per2.toFixed(3) + '%');
console.log(per3.toFixed(3) + '%');
console.log(per4.toFixed(3) + '%');

let fs = require('fs');

let input = fs.readFileSync('./data/문제9_상수.txt')
            .toString().split('\n');
input = input[0].split(" ").map(Number);
// let num = input[0].split(' ');
// console.log(num);
let num = input.map(x => parseInt(x.toString().split('').reverse().join('')));

console.log(num);
let max = num.reduce((x , y)=> Math.max(x , y));
console.log(max);
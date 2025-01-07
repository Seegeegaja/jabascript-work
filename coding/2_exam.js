let fs = require('fs');

let input = fs.readFileSync('./data/세자리곱셈.txt')
            .toString().split('\n');
input = input[0].split(' ').map(Number);
console.log(input);
let num = fs.readFileSync('./data/세자리곱셈.txt')
.toString().split('\n');
num = num[1].split("").map(Number);
console.log(num);



let result = [];
for(let i=0; i<num.length; i++){
  result.push(input * num[i]);
  console.log(result[i]);
  
}
let sumValue = result.reduce((x ,y)=> x + y);
  console.log(sumValue);




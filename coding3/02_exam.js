let fs = require('fs');

let input = fs.readFileSync('./data/세자리곱셈.txt')
            .toString().split('\n');
            input = input[0].split(' ').map(Number);
          
console.log(input);
let a = parseInt(input[0]);
let b = input[1];

for(let i = 2; i>=0; i--){
 console.log(a*b[i]);
}
console.log(a*b);

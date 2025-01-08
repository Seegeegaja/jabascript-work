let fs = require('fs');

let input = fs.readFileSync('./data/문제8_문자열반복.txt')
            .toString().split('\n');
console.log(input);

const T = parseInt(input[0]);

const results = [];

for(let i = 1; i<=T ; i++){
  const [R , S] = input[i].split(' ');
  const re = parseInt(R);

  let P = '';
  for(const char of S){
    P += char.repeat(re);
  } 
  results.push(P);
}
console.log(results.join('\n'));
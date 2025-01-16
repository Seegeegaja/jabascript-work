let fs = require("fs");

let input = fs.readFileSync("./data/세자리곱셈.txt").toString().split("\n");
console.log(input);
// parseInt
let data_1 = input[0].split('');
let data_2 = input[1].split('');
let total = 0;
let k = 1;

for (let i = 2; i >= 0; i--) {
  let result = 0;
  let digit = 1;
  for(let j=2; j>=0; j--){
    result = result+Number(data_1[j]) * digit * Number(data_2[i]);
    digit *=10;
  }
  console.log(result);

  total = total + (result*k);
  k *=10;

}
console.log(total);

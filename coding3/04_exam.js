let fs = require("fs");

let input = fs.readFileSync("./data/문제4_최대최소.txt").toString().split("\n");
num = parseInt(input[0]);
data = input[1].split(' ').map(Number);
console.log(num);
console.log(data);

let min = 999999999999;
let  max = 0;

for(let i=0; i<num; i++){
  //가장 큰값
  if(max<data[i])max = data[i];
  //가장 큰값   
  if(min>data[i])min = data[i];
}
console.log(min + ' ' + max);


min = data.reduce((x,y)=> Math.min(x,y));
max = data.reduce((x,y)=> Math.max(x,y));
console.log(min + ' ' + max);
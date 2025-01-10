let fs = require("fs");

let input = fs.readFileSync("./data/문제6_평균.txt").toString().split("\n");
//전체 시료 갯수
let n = parseInt(input[0]);
console.log("n = " + n);

for (let i = 1; i <= n; i++) {
  let data = input[i].split(' ').map(Number);
  let m = data[0];
  let sum = 0;
  for(let j=0; j<m; j++){
    sum+= data[j];
  }
  //총점 계산
  console.log(sum);
  //평균계산
  let avg = sum / m;
  console.log(avg);
  //평균보다 큰값의 수 저장 변수
  let cnt;
  for(let k=1; k<n; k++){
    if(data[k] > avg) cnt = cnt + 1;
  }
  let rate = (cnt/n);
  console.log(rate.toString());
}

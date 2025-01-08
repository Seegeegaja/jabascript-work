let fs = require("fs");

let input = fs
  .readFileSync("./data/문제5_최대값인덱스.txt")
  .toString()
  .split("\n")
  .map(line => line.split(" ")
  .map(Number));

  let flatInput = input.flat();
  console.log(flatInput);

  let maxVal = -Infinity;
  let maxIndex = -1;

  flatInput.forEach((value , index)=>{
    if(value > maxVal){
      maxVal = value;
      maxIndex = index + 1;
    }
  });
  console.log(maxVal);
  console.log(maxIndex);


// // 최대값 찾기
// flatInput.forEach((value, index) => {
//   if (value > maxVal) {
//     maxVal = value;
//     maxIndex = index + 1; // 1부터 시작하는 인덱스이므로 +1
//   }
// });

// console.log("최댓값:", maxVal);
// console.log("최댓값 위치:", maxIndex, "번째");
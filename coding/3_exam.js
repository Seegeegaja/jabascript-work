let fs = require("fs");

let input = fs.readFileSync("./data/문제3_시험성적.txt").toString().split("\n");
input = input[0].split(" ").map(Number);
console.log(input);
let value = input[0];
console.log(value);

if (value >= 90) {
  console.log("A");
} else if (value >= 80) {
  console.log("B");
} else if (value >= 70) {
  console.log("C");
} else if (value >= 60) {
  console.log("D");
} else {
  console.log("F");
}
// switch (value) {
//   case 90 <= 100:
//     console.log("A");
//     break;
//   case 80 <= 89:
//     console.log("B");
//     break;
//   case 70 <= 79:
//     console.log("C");
//     break;
//   case 60 <= 69:
//     console.log("D");
//     break;
//   case 0 <= 59:
//     console.log("F");
//     break;
// }

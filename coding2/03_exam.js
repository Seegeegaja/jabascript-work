let fs = require("fs");

let input = fs.readFileSync("./data/03_exam.txt").toString().split("\n");
console.log(input);

let N = parseInt(input[0]);
let values = input[1].split(" ").map(Number);

let asd = [...values].sort((a, b) => a - b);

let rankMap = new Map();

asd.forEach((x, y) => {
  if (!rankMap.has(x)) {
    rankMap.set(x, y);
  }
});

let ranks = values.map((x) => rankMap.get(x));
console.log(ranks.join(" "));

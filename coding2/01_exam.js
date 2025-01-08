let fs = require('fs');

let input = fs.readFileSync('./data/01_exam.txt')
            .toString().split('\n');
console.log(input);

let N = parseInt(input[0]);

let point = input.slice(1, N+1).map(line => {
  return line.split(' ').map(Number);
});
console.log(point);

point.sort((a , b)=>{
  if(a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

point.forEach(point => {
  console.log(point[0], point[1]);
});

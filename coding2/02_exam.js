let fs = require('fs');

let input = fs.readFileSync('./data/02_exam.txt')
            .toString().split('\n');
console.log(input);

let N = parseInt(input[0]);


let words = input.slice(1, N+1);

let dan = [...new Set(words)];

dan.sort((a,b)=> {
  if(a.length === b.length){
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

dan.forEach(word =>{
  console.log(word);
})




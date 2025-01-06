//1. 구구단 출력

// for(let i = 1; i<10; i++){
//   console.log(i+"단")
//   for(let j = 1; j<10; j++){
//     console.log(i+"*"+j+"="+(i*j));
//   }
// };

//2. #찍기
/**
 *     #
 *    ###
 *   #####
 *  #######
 */

const lev = 4;
for(let i =1; i<=lev; i++){
  let stars = "";
  for(let j = 1; j<=lev-i; j++){
    stars = stars + " ";
  }
  for(let k = 1; k<=i*2-1; k++){
    stars=stars+"*"
  }
  console.log(stars)
}

let star = new Array(7).fill(' ');

let mid = 3;
star[mid] = '*';
//배열을 문자로 변환
let starPrint = star.join('');
//출력
console.log(starPrint);
for(let i = 1; i<=mid; i++){
  star[mid] = '*';
  for(let j=1; j<=i; j++){
    star[mid+j] = '*';
    star[mid-j] = '*';
  }
  starPrint = star.join('');
  console.log(starPrint);
}
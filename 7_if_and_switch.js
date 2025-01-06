//if 구문
let num = 5;
if (num % 2 === 0) {
  console.log(num + "짝수입니다.");
} else {
  console.log(`${num}는 홀수입니다`);
}

if (num % 2 === 0) {
  console.log(num + "2의 배수입니다.");
} else if (num % 3 === 0) {
  console.log(`${num}는 3배수 입니다`);
} else {
  console.log("모르겠습니다");
}

//switch구문
let number = 1;
switch (number) {
  case 1:
    console.log("홀수");
    break;
  case 2:
    console.log("짝수");
    break;

  default:
    break;
}

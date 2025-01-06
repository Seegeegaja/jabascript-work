//가장 어려운것
//1) 단일 함수의 생성
console.log('1) 단일 함수의 생성');
function calculate(number){
  console.log(number*10);
}
calculate(4);

//2)여러개 파라미터 사용법
console.log('2)여러개 파라미터 사용법');
function multiply(x,y){
  console.log(x*y);
}
multiply(3,4);

//3)디폴트 파라미터
console.log('3)디폴트 파라미터');
function minus(x,y=1){
  console.log(x-y);
}
minus(5);
minus(5,3);

//4)결과 반환받기
console.log('4)결과 반환받기');
function divide(x,y){
  return x/y;
}
let result = divide(7,3);
console.log(result);
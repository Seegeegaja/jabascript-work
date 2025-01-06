
// 명시적 형변환
let age = 22;
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적 형변환
let test = age +''; //숫자 +문자 --> 문자
console.log(typeof test , test)

//정리 
//숫자를 문자로 바꿀때는 tostring();
//문자를 숫자로 바꿀때는 parseInt();, parseFloat();
let number = (123.99).toString;
console.log(typeof parseFloat(number), parseInt('123.99'));
//NaN : not a Number

let num = 123.998;
console.log('num = ' + num);
console.log(`num =  ${num}`);

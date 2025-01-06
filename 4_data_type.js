/**
 * Number
 * String
 * Boolean
 * undefind
 * null
 * symbol
 * Object(Function, Array, object) : 객체 타입
 */

//Number 할당
const age = 20;
const pi = 3.141592;
console.log(typeof age);
console.log(typeof pi);

//String
const myTest = '코딩 테스트';
console.log(myTest);
//Escape Charater
const iveYukin = '아이브 \n \t 안유진';
console.log(iveYukin);

// Template Literal에서 백틱(`)...
const groupName = '아이브';
let idolName = '장원영';
console.log(groupName + '장원영');
// 템플릿 리터널... 빽틱 안에 넣을때만 %{변수명} 많이 씀 
console.log(`우리의 주인공은 ${groupName}
   그룹의 ${idolName}
    입니다 환영해 주세요`);


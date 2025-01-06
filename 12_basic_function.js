//필히 잘 알아야 하는것
let iveMembers = [
  '안유진',
  '장원영',
  '레이',
  '리즈',
];
console.log(iveMembers);

//1. concat() : 새로운 ITEM을 맨뒤에 삽입 *원본을 수정하지 않음*
console.log('1. concat()');
console.log(iveMembers.concat('이서'));
console.log(iveMembers);
 
//2. slice(어디서부터 , 어디 전 까지) : 삭제 *원본수정 xx*
console.log('2. slice()');
console.log(iveMembers.slice(0, 2));
console.log(iveMembers);

//3. spread operator (...) : 기존배열을 쪼아악 펼쳐주는 아이
// ive2에 iveMemvers 배열을 복사...
console.log('3. spread operator');
let ive2 = iveMembers; // 이러한 얕은 복사를 사용하지 않습니다. 주소만 가리키는것
let ive3 = [... iveMembers]; // 하드 카피!!!!!!~!!!!~!~ 원본을 복사 해버림

iveMembers.push('이서');
console.log(ive2);
console.log(ive3);


// 4. class 깊은 복사
let jang = {
  name : '장원영',
  age : 22
};
let 장원영 = {... jang};
jang.age = 25;
console.log(jang);
console.log(장원영);

// 5. join 배열 간 자료를 ,(comma)로 구분 후 이어줌
console.log('5,join()');
console.log(iveMembers.join('/'));

//6. 기존배열에 값을 하나 추가--가을 추가
let newIve = [... iveMembers , '가을'];
console.log(newIve);
iveMembers = [...newIve];
console.log(iveMembers);

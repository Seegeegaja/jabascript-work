//산술 연산자
console.log(10 + 10);
console.log(7 % 3);

//증감연산자
console.log('=======증감연산자===========');
let number = 1;
number++;
console.log(number);

//간단 타입 변환
console.log('=======간단한 타입 변환===========');
let sampl = '99';
console.log(typeof sampl);
console.log(+sampl);
console.log(typeof + sampl);

//비교 연산자
console.log('==비교 연산자== : 값만 비교');
console.log(3 == 3);
console.log(3 == '3');

console.log('===비교 연산자===');
console.log("값과 타입을 같이 비교");
console.log(3 === 3);
console.log(3 === '3');

//삼항연사자 많이 씀
console.log(10 > 0 ? '10은 0보다 크다.' : '그렇지 않다.');

//논리 연산자(and : && , or : ||) or은 둘중에 하나가 참이면 참을 돌려줌

//단축 평가 - 오지게 많이 씀
console.log('==========================');
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false ? '아이브' : 'true');
console.log(true ? '아이브' : 'true');
console.log('==========================');//true면 뒤에걸 확인하고 출력, false면 fals출력
console.log(false && '뉴진스');
console.log(true && '뉴진스');

console.log(true && true && '아일릿');
console.log(true && false && '아일릿');

console.log('==========================');
let name;
console.log(name);

name = name ?? '장준용';//앞의 값이null이거나 undefind면 뒤에걸 출력
console.log(name);

name = '' && '아이브';//null,0,undefind 은 false로 본다
console.log(name);

//스크립트에서 false로 보는 아이들은
//false, null , 0, undefind, ''(공백)




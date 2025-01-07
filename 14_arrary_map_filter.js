let iveMembers = ["안유진", "장원영", "레이", "리즈"];

//1. map() : 원래 배열 변형시킴 - > 새것으로 준다 **원본을 바꾸진 않는다**
//*** : React 에서 for뮨울 map으로 돌림

console.log("1.map()");
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브 : ${x}`));
console.log(iveMembers);
//안유진만 ... 아이브 : 안유진으로 출력
console.log("2.안유진만 ... 아이브 : 안유진으로 출력");
console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브 : ${x}`;
    } else return x;
  })
);

//3. map 을 반복문으로 처리
let i = 1;
iveMembers.map((X) => {
  console.log(i);
  i++;
});

// 4. filter 사용하기
console.log("4.필터 사용하기");
let values = [1, 9, 8, 5, 3];
// 전체 출력하기
console.log("전체 : " + values.filter((X) => X));

//짝수 출력하기
console.log("짝수 : " + values.filter((x) => x % 2 === 0));

//3보다 큰수 출력
console.log("3보다 큰수 찾기 : " + values.filter((x) => x > 3));

//3보다 큰수 찾아서 오름차순 정렬하기
let newArr;
console.log('3보다 큰수 오름차순으로 정렬하기');
newArr = values.filter((x)=> x>3).sort((x,y)=>x-y);
console.log(newArr);

console.log('3보다 큰수 내림차순으로 정렬하기');
newArr = values.filter((x)=> x>3).sort((x,y)=>y-x);
console.log(newArr)
// console.log(values.filter((x)=>x>3).sort((x,y) => { 
//   return x - y
// }));

//5. findIndex() 함수
console.log('find 함수로 값 찾기');
console.log('장원영은 '+ iveMembers
  .findIndex(x=>x === '장원영') + '번째');

//6.reduce(p,n) 함수
//p : previous (이전), next : 다음값 , 초기값
// 문제 : 배열의 합
//
let sumValue = values.reduce((x,y)=> x +y );
console.log(sumValue);
//문제 : 배열의 최대값 구하기
let maxValue = values.reduce((x,y)=> Math.max( x , y ));
// console.log(Math.max(values)); 이건 안됨
console.log(maxValue);

//문제 : 배열의 최소값 구하기
let minValue = values.reduce((x,y)=> Math.min( x , y ));
console.log(minValue);




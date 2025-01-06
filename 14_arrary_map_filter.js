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
console.log(values.filter((x)=>x>3).sort((x,y) => { 
  return x - y
}));



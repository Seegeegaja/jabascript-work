//필히 잘 알아야 하는것
let iveMembers = ["안유진", "장원영", "레이", "리즈"];

//1. sort() : 오름차순 정렬 , 원본수정 OOOO
console.log("1. sort()");
iveMembers.sort();
console.log(iveMembers);

//2. reverse() : 내림차순정렬, 원본 수정 함
console.log("2. reverse()");
iveMembers.reverse();
console.log(iveMembers);

//3. 숫자배열의 정렬 --기본적으로 문자 정렬하는 문제가 있음 앞단만 정력해서 2자릿수는 안됨
let numbers = [1, 9, 71, 5, 13];

//오름차순 정렬
console.log("숫자 정렬");
numbers.sort();
console.log(numbers);

//내림차순 정렬
console.log("숫자정렬");
numbers.reverse();
console.log(numbers);

//숫자 오름차순 정렬
console.log(" 숫자 오름 정렬");
numbers.sort((x, y) => {
  return x - y;
  //retun x > y ? 1 : -1; 양수면 바꾸고 음수면 변하지 않음
});
console.log(numbers);

//숫자 내림차순 정렬
console.log("숫자 내림 정렬");
numbers.sort((x, y) => {
  return y - x;
  //retun x < y ? 1 : -1;
});
console.log(numbers);

//4. 문자 배열 *대문자가 섞여있으면 이상하게 나옴

let strName = ["aa", "Aa", "ba", "Ba"];
console.log("문자열 대문자 변환 오르차순 정렬");
console.log(
  strName.sort((x, y) => {
    upperx =x.toUpperCase();
    uppery =y.toUpperCase();
    if (x > y) return -1; // 크면 바꿈
    if (x < y) return 1; // 작으면 안바꿈
    return 0; //안바꿈
  }));
console.log(strName.reverse());


//5. 객체 비교하기
console.log('5. 객체 비교하기');
let data = [
  { name :'장원영', score : 90},
  { name :'안유진', score : 85},
  { name :'이서', score : 99},
];
console.log(data);
//점수에 대해서 오름차순 정렬(점수가 높은 값부터)
console.log('점수에 대해서 오름 차순 정렬');
data.sort((x,y)=> {
  return y.score - x.score;
});
console.log(data);


//점수에 대해서 내림차순 정렬(점수가 낮은 순부터)
console.log('점수에 대해서 내림 차순 정렬');
data.sort((x,y)=>{
  return x.score > y.score ? 1 : -1;
});
console.log(data);


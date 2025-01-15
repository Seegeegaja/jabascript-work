// 겁나게 많이 쓸예정
// 비동기 작업 처리할때 사용하는 객체
// 인자로 콜백 함수를 사용...
// 약속해 줘 콜백 함수 실행하고 그 결과를 돌려준다고 
//내 일 하면서 기다릴게

// const 주문 = new promise((성공,실패)=>{
//   // 여기에 콜백함수를 적는다
  
// });
// setTimeout((실행할 함수 , 몇초후)=>{
//  
// }1000 = 1초);여기에 있는 시간이 지난 후에 결과값을 내줌

const myPromise = new Promise((res, err)=>{
// 실행할 비동기 처리
  setTimeout(()=>{
    //실행할 함수
    const text =prompt('따봉을 입력해줘 선물 줄게');
    if(text == '따봉'){
      res('👍');
    }else{
      err('따봉이 아니잖아')
    }
  },2000)
});
myPromise
//성공시 
  .then((data)=>{
    console.log("promise결과 : " + data);
  })
  //실패시
  .catch((err)=>{
    console.log("promise 결과 : "+ err);
  })
  //성공 실패 무관하게 모두 실행하는거
  .finally(()=>{
    console.log("Finally는 무조건 실행됨");
  });




fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then((data)=>{
  console.log(data.json());
})
.catch((err)=>{
  console.log('주소가 이상한데?');
})
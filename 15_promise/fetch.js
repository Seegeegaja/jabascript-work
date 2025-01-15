//서버에 정보를 요청하는 비동기 함수
//fetch : 함수는 자바스크립트에서 지원하는 함수 입니다
//똑같은 함수들은
//ajax : jQuery에서 지원
// axios : Vue , React 에서 사용하는 패키지

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then((data)=>{
    // JSON 형식을 javasqript Object 타입으로 변환 : json()함수가
    return data.json();
  })
  .then((x)=>{
    return x.filter((x)=> x.id >=5);
  })
  .then((data)=> {
    console.log(data);
    //HTML 찍어주기
    let id = document.querySelector('#id');
    let title = document.querySelector('#title');
    id.innerHTML = data[0].id
    title.innerHTML = data[0].title
  })
  .catch((err)=>{
    console.log('주소가 이상한데?');
  })
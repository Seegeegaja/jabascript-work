//콜백 지옥 Callback-Hell

function getUser(userId,callback){
  setTimeout(()=>{
    //1초 후에 실행할 내용
    const idol = {
      id : userId,
      name : '장원영',
    }

    callback(idol);
  }, 1000);
}

//게시글 얻어오기
function getArticle(articleID, callback){
  setTimeout(()=>{
    const articles = [
      {
        id : 1,
        title : '장원영 첫 글',
      },
      {
        id : 2,
        title : '장원영 두번째 글',
      }
    ];
    callback(articles)
  }, 1000)
}

//답글 
function getComments(commentID , callback){
  setTimeout(()=>{
    const comments = [
      {
        id : 1,
        cmoment : '첫 댓글',
      },
      {
        id : 2,
        comment : '두 번째 댓글',
      },
      {
        id : 3,
        comment : '세 번째 댓글',
      }
    ];
    callback(comments);

  },1000)
}

getUser(1, (result)=>{
  console.log('idol : ', result);
  getArticle(result.id , (articls)=>{
    console.log('게시글 목록 : ' , articls);
    getComments(articls[0].id , (comments)=>{
      console.log('댓글 : ' , comments);
    })
  })
});
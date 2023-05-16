// 미들웨어의 형식으로 작성한 logger
// 미들웨어의 특징
// 모든 dispatch가 호출되고 리듀서가 실행되기전에 
// 먼저 실행되는 중간 함수! 
// 1) 리듀서로 값을 바꾸기전에 실행하는 내용을 출력 또는 수정
//  ex) logger : 리덕스에 관한 내용 출력
// 2) 비동기함수 함수를 사용할때 그 순서를 정해줄수있다
//  ex) thunk : 비동기 함수를 순서에 따라 출력할수 있게 작성

const myLogger = store => next => action =>{
    // 액션 객체 출력 {type : "~"}
    console.log(action);

    // next() 액션객체를 리듀서 또는 미들웨어에게 전달
    // result는next()실행한 결과값 : undefined
    const result = next(action);
    return result
}

export default myLogger
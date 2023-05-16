// 액션함수, 리듀서, state의 초기값

/** memo.js
 *  1. 메모 추가
 *  2. 메모 수정
 *  3. 메모 삭제
 *  state : [](여러개) / id, text, date(내용)
 *  action : "ADD_MEMO", "MODIFY_MEMO", "DELETE_MEMO"
 */

// state의 초기값
const initalState = [
    {
        id : 1,
        text :"메모입니다",
        date : "2023-05-12"
    },
    {
        id : 2,
        text :"두번째 메모입니다",
        date : "2023-05-12"
    },
]
// 화면에 출력될때 수정되어서 출력되지않음
// 내부적으로 쓰는 변수
let id = 3;


// 액션 생성 함수
// addMemo는 메모의 값을 추가하기위해 함수를 통해 memo의 값을 가져옴
// : {text, date}을 가져와야함 >> dispatch사용때 확인!
export const addMemo = (memo) => ({type : "ADD_MEMO", payload : memo});
// id는 메모의 id 값을 가져옴
export const deleteMemo = (id) => ({type:"DELETE_MEMO", payload:id});


// 리듀서 
function memo(state=initalState, action) {
    switch (action.type) {
        case "ADD_MEMO":
            // 새로운 메모 작성
            const newMemo = {
                ...action.payload,
                id : id
            }
            // state에 있는 값이 아니므로 직접접근해서 수정가능
            id++
            // 새로운 메모 리스트 만들어서
            const newMemoList = state.concat(newMemo)
            // 새로운 메모 리스트 return
            return newMemoList
        case "DELETE_MEMO":
            // filter를 통해서 id제외하고 새로운 배열
            const deleteMemoList = state.filter((memo)=>(memo.id !== action.payload));
            return deleteMemoList
        default :
            return state
    }
}

export default memo
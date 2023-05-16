// createSlice를 통해서 이름, 초기값, 리듀서 작성
// action과 reducer export

import {createSlice} from '@reduxjs/toolkit'
export const memoSlice = createSlice({
    name:"memo",
    initialState: [
        {
            id:1,
            text:"메모입니다",
            date:"23-05-15"
        }
    ],
    reducers : {
        // 이전에 리덕스에서 쓰는 방법
        addMemoRedux : (state,action)=>{
            // 1. 새로운 메모
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++;
            // 2. 새로운 메모가 있는 배열 생성
            const newMemoList = state.concat(newMemo)
            // 3. return 새로운 배열 전달
            return newMemoList;
        },
        // 값을 직접 수정해서 쓰는 방법
        addMemoToolkit : (state,action)=>{
            // 배열의 메소드 중 push()
            // push()는 원본 배열에 값을 추가해서 사용한다
            const newMemo = {
                ...action.payload,
                id : id
            }
            state.push(newMemo)
        },
        // 반드시 toolkit에서 제공되는 형태로 해야 할 필요는 없다.
        // 배열에 관한 값을 사용 할 때는 익숙한 메소드 사용 권장
        deleteMemoRedux : (state,action)=>{
            // 1. id 값을 이용해서 제외한 새로운 배열 생성 - filter
            const newMemoList = state.filter((m)=>(m.id !== action.payload))
            // 2. return 새로운 배열을 할당
            // return을 통해서 할당하는 형태는 state의 형태
            return newMemoList
        },
        // state 값을 바로 수정하기 위해 splice 사용
        deleteMemoSplice : (state,action) => {
            // action.payload에서 memolist의 인덱스 값 가져올 예정
            state.splice(action.payload,1)
        }
    }
})

// 화면에 업데이트 되는 변수가 아닌,
// 코드 안에서 사용 할 변수
let id = 2;


export const { addMemoRedux, addMemoToolkit, deleteMemoRedux,deleteMemoSplice } = memoSlice.actions
export default memoSlice.reducer
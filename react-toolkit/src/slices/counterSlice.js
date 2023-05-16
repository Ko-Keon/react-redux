// Slices를 이용하여 이름, 초기값, 리듀서를 작성
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        value : 0,
    },
    reducers : {
        // 객체 안에서 함수(메소드) 작성
        increment : (state)=>{
            // 툴킷은 state의 값에 직접 접근하여 값을 바로 수정 가능
            // =을 통한 값 할당
            state.value += 1;
        },
        // 감소하는 함수(메소드) 작성
        decrement : (state)=> {
            state.value -= 1;
        },
        // 값을 입력받아와서 증가하는 함수
        // action은 리덕스에서 값을 전달한 액션 객체의 내용
        // action의 payload는 리덕스 툴킷에서 사용
        incrementByAmount : (state,action) => {
            state.value += action.payload
        }
    }
})

// 액션 생성 함수를 slice를 통해서 내보냄
export const { increment,decrement,incrementByAmount } = counterSlice.actions
// reducer 함수를 slice를 통해 내보냄
export default counterSlice.reducer
import React from 'react'
// 리듀서에 있는 값을 꺼내서 사용 : useSelector
// 리듀서에 있는 값을 수정 : useDispatch
import { useDispatch, useSelector } from "react-redux"

// dispatch에서 사용할 액션 함수
import { change, decrease, increase } from '../modules/counter';

export default function CounterBox() {
  //useSelector로 값 가져오기
  // state는 modules의 index.js에서 작성한 rootReducer
  // state.counter는 rootReducer안에 객체로 묶인 counter 
  //    >> counter를 속성이름으로 사용
  // reducer 함수만 전달해도 useSelector에서 자동으로 state를 뽑아줌
  const counter = useSelector((state)=>(state.counter));

  // useDispatch()를 통해서 사용할 함수를 들고옴
  const dispatch = useDispatch();

  return (
    <div>
        <h3>{counter}</h3>
        <button onClick={()=>{
            // 값을 수정하기 위해서, dispatch와 액션함수 사용
            // 액션함수는 return 값이 객체인 함수 : reducer에 작성
            // increase() 으로 작성해서 실행하는 이유 : return값 전달을 위해
            dispatch( increase() )
        }}>
            +1
        </button>
        <button onClick={()=>{ dispatch( decrease() ) }}>
            -1
        </button>
        <button onClick={()=>{ dispatch( change(5) ) }}>
          +5
        </button>
        {/** +30 버튼을 눌렀을때 30 증가하게 만들기 */}
        <button onClick={()=>{ dispatch( change(30) ) }}>
          +30
        </button>
    </div>
  )
}
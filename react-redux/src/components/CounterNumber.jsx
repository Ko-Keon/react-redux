import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeNumber, decreaseNumber, increaseNumber } from '../modules/counterNumber';

export default function CounterNumber() {
  const counterNumber = useSelector((state)=>(state.counterNumber));

  const dispatch = useDispatch();

  // input의 값을 입력받아 올때는 바로 redux로 접근하지않고
  // useState로 값을 받아온 후 확정되면 redux로 전달
  const [input, setInput] = useState(1);

  return (
    <div>
        <p>counterNumber의 (state)객체에서 값을 가져와서 출력</p>
        <h3>{counterNumber.count}</h3>
        <button onClick={()=>{ dispatch( increaseNumber() ) }}>
            +{counterNumber.num}
        </button>
        {/** 액션 함수와 reducer에 내용을 추가해서 버튼이 실행되게 */}
        <button onClick={()=>{ dispatch( decreaseNumber() ) }}>
            -{counterNumber.num}
        </button>
        <input 
            type="text" 
            onChange={(e)=>{setInput(e.target.value)}} 
            value={input}
        />
        <button onClick={()=>{ 
                dispatch( changeNumber( parseInt(input)) );
                setInput("")
            }}>
            숫자입력
        </button>
    </div>
  )
}
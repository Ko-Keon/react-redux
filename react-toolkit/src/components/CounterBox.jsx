import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount } from '../slices/counterSlice';

export default function CounterBox() {
  const counter = useSelector((state)=>(state.counter.value))
  const counter2 = useSelector((state)=>(state.counterReducer.value))

  // 임의로 증가할값을 useState
  const [num, setNum] = useState(4);

  const dispatch = useDispatch();
  return (
    <div>
        <h3>{counter},{counter2}</h3>
        <button onClick={()=>{dispatch(increment())}}>
            +1
        </button>
        <button onClick={()=>{dispatch(decrement())}}>
            -1
        </button>
        {/** num값을 바꾸기 위한 input태그 작성 
         *   *input태그로 받아온 값은 문자열!
        */}
        <input type='num' value={num} onChange={(e)=>{setNum(parseInt(e.target.value))}}/>
        <button onClick={()=>{
            //매개변수로 전달되는 값은 payload로 사용할수 있다
            dispatch( incrementByAmount(num) )
        }}>
            {num} 값만큼 증가
        </button>
    </div>
  )
}

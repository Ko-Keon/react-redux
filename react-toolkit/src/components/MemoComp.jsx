import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addMemoRedux, addMemoToolkit, deleteMemoRedux, deleteMemoSplice } from '../slices/memoSlice';

export default function MemoComp() {
    const memo = useSelector((state)=>(state.memo))
    const dispatch = useDispatch();

    const [input,setInput] = useState("");
  return (
    <div>
        {   
            // memo 배열의 index 값을 전달하여 splice를 이용하여 삭제
            // 다양한 삭제 방법 중 하나
            memo.map((m,index)=>(
                <div key={m.id}>
                    <h3>{m.text}</h3>
                    <p>{m.date}</p>
                    <button>♥</button>
                    <button onClick={()=>{dispatch(deleteMemoRedux(m.id))}}> X </button>
                    <button onClick={()=>{dispatch(deleteMemoSplice(index))}}> index-X </button>
                </div>
            ))
        }
        {/* memo redux 내용 확인 후,
            input 태그를 이용해서 입력 받아와 수정하기 */}
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>{dispatch(addMemoRedux({text:input, date:"23-05-15"}))}}>
            메모 추가
        </button>
        <button onClick={()=>{dispatch(addMemoToolkit({text:input,date:"2023-05-15"}))}}>
            Toolkit 형태로 추가
        </button>
    </div>
  )
}

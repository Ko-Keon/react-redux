import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemoRedux,deleteMemoRedux, toggleLike} from '../slices/memoSlice2';


export default function MemoComp() {
    const memo = useSelector((state)=>(state.memo))
    const dispatch = useDispatch();
    const [input,setInput] = useState("");
    // 하트 토글 시키기
    const like = (id) => {
        dispatch(toggleLike(id));
      };
    
  return (
    <div>
        <h1>메모장</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={()=>{dispatch(addMemoRedux({text:input, date:"23-05-16"}))}}>추가</button>
        {
            memo.map((m)=>(
                <div key={m.id}>
                    <h3>{m.text}</h3>
                    <p>{m.date}</p>
                    <button onClick={() => like(m.id)}>{m.liked ? "♥" : "♡"}</button>
                    <button onClick={()=>dispatch(deleteMemoRedux(m.id))}>X</button>
                </div>
            ))
        }
    </div>
  )
}

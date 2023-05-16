import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo, deleteMemo } from '../modules/memo';

export default function MemoComp() {
  const memo = useSelector((state)=>(state.memo));
  const [input, setInput] = useState("");
  
  const dispatch = useDispatch();

  const onAddMemo = () => { 
    dispatch( 
        addMemo(
                {
                    text : input, 
                    date :"2023-05-12"
                }
            )
        );
    setInput("");
    }

  return (
    <div>
        <h2>
            MemoComp
        </h2>
        
        <input type="text" 
            onChange={(e)=>{setInput(e.target.value)}} 
            value={input} />
        <button onClick={ onAddMemo }>
            메모추가
        </button>
        {/** form으로 만들어서 submit으로 실행 */}
        <form onSubmit={ 
            (e)=>{
                e.preventDefault();
                // 이벤트에 바로 작성할때는 함수자체를 넣어야하기에
                // onAddMemo로 넣어주지만,
                // 지금 onSubmit에서 ()=>{} 안에 작성되고 있기에
                // onAddMemo() 로 함수를 실행해야한다.
                onAddMemo();
            }}>
            <input type="text" 
                onChange={ (e)=>{setInput(e.target.value)}}
                value={input}
            />
            <button type='submit'>
                form으로 메모 추가
            </button>
        </form>

        {
            memo.map((m)=>(
                <div key={m.id}>
                    <p>{m.id}</p>
                    <h4>{m.text}</h4>
                    <p>{m.date}</p>
                    <button 
                        // 클릭했을때,
                        // m.id를 액션생성함수로 전달하여 
                        // 리듀서에서 filter을 통해 새 배열 만들기
                        // memo.js에 작성
                        onClick={()=>{ dispatch( deleteMemo(m.id) ) }}
                    >
                        X
                    </button>
                </div>
            ))
        }


    </div>
  )
}
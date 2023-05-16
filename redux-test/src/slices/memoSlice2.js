import {createSlice} from '@reduxjs/toolkit'

export const memoSlice2 = createSlice({
    name:"memo",
    initialState: [
        {
            id:1,
            text:"메모입니다",
            date:"23-05-16"
        }
    ],
    reducers : {
        addMemoRedux : (state,action)=>{
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++;
            const newMemoList = state.concat(newMemo)
            return newMemoList;
        },

        deleteMemoRedux : (state,action)=>{
            const newMemoList = state.filter((m)=>(m.id !== action.payload))
            return newMemoList
        },

        toggleLike: (state, action) => {
            const id = action.payload;
            const memoItem = state.find((memo) => memo.id === id);
            if (memoItem) {
                memoItem.liked = !memoItem.liked;
            }
        }
    }
})


let id = 2;


export const { addMemoRedux, deleteMemoRedux,toggleLike} = memoSlice2.actions
export default memoSlice2.reducer

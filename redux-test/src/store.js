import { configureStore } from '@reduxjs/toolkit'
import memoSlice2 from './slices/memoSlice2'

export default configureStore({
    reducer : {
        memo : memoSlice2
    }
})
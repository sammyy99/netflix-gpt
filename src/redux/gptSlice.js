import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        search:false
    },
    reducers:{
        toggleGptSearchView : (state,action)=>{
             state.search=!state.search
        }
    }
})

export default gptSlice.reducer;
export const {toggleGptSearchView} = gptSlice.actions
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        search:false,
        searchedMovies:null,
        gptMovies:null
    },
    reducers:{
        toggleGptSearchView : (state,action)=>{
             state.search=!state.search
        },
        addSearchedMovies : (state,action)=>{
            state.searchedMovies = action.payload
        },
        addGptMovies : (state,action)=>{
            state.gptMovies = action.payload
        }
    }
})

export default gptSlice.reducer;
export const {toggleGptSearchView,addSearchedMovies,addGptMovies} = gptSlice.actions
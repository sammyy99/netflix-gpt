import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"nowPlayingMovies",
    initialState: {
        nowPlayingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        }
    }
})

export default moviesSlice.reducer;
export const {addNowPlayingMovies} = moviesSlice.actions;
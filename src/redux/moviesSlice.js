import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"nowPlayingMovies",
    initialState: {
        nowPlayingMovies:null,
        movieTrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload
        }
    }
})

export default moviesSlice.reducer;
export const {addNowPlayingMovies,addMovieTrailer} = moviesSlice.actions;
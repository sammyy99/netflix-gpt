import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"playingMovies",
    initialState: {
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        movieTrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload
        }
    }
})

export default moviesSlice.reducer;
export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies} = moviesSlice.actions;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice"
import moviesReducer from "../redux/moviesSlice"

const appstore = configureStore(
    {
  reducer:{
    user: userReducer,
    nowPlayingMovies : moviesReducer
  }
    }
)

export default appstore;
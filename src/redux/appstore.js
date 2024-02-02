import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice"
import moviesReducer from "../redux/moviesSlice"

const appstore = configureStore(
    {
  reducer:{
    user: userReducer,
    movies : moviesReducer
  }
    }
)

export default appstore;
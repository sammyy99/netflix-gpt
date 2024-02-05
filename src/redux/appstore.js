import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice"
import moviesReducer from "../redux/moviesSlice"
import gptReduer from "../redux/gptSlice"
import langReducer from "../redux/langSlice"

const appstore = configureStore(
    {
  reducer:{
    user: userReducer,
    movies : moviesReducer,
    gpt: gptReduer,
    lang: langReducer
  }
    }
)

export default appstore;
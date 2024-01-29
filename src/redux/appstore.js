import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user"

const appstore = configureStore(
    {
  reducer:{
    user: userReducer
  }
    }
)

export default appstore;
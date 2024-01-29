import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/user";

const Body = () => {

  const dispatch = useDispatch()

 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {  // Basically if condition if for both login and sign up.
    
      const {uid , email , displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      
    } else {
      dispatch(removeUser())
    }
  });
 },[])

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },

    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <RouterProvider router ={appRouter}/>
  )
};

export default Body;

import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

const Authentication = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {  // This onAuth gets called each time when auth state is changed so we login or signup or signout this will be called so we can set our routing from here
          if (user) {  // Basically if condition if for both login and sign up.
          
            const {uid , email , displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            navigate("/browse")
            
          } else {
            dispatch(removeUser())
            navigate("/")
          }
        });
       },[])

  return (
    <div></div>
  )
}

export default Authentication;
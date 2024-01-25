import React from 'react'
import { netflixBG, } from "../utils/urls"
import Header from './Header'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className='relative'>
      <div className='absolute z-10 w-full'>
        <Header/>
      </div>

      <div className='absolute z-10 w-3/12 inset-0 mx-auto mt-28'>
        <LoginForm/>
      </div>

      <div className='absolute inset-0 bg-black opacity-50'></div>
      <img className='w-full' src={netflixBG} alt='No background' />
    </div>

  )
}

export default Login
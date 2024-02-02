import React from 'react'
import { playIcon } from '../utils/urls'

const MainContianerTitle = ({title,overview}) => {

  return (
    <div className='px-16 mt-[17%] absolute'>
      <div className='py-6'>
        <h1 className='font-bold text-6xl text-white w-2/5'>{title}</h1>
      </div>
      <div className='w-2/5 py-6 font-semibold text-xl text-white'>
        {overview}
      </div>
      <div className='py-4 flex'>
        <button className='text-2xl py-3 px-8 bg-white rounded-md flex hover:bg-opacity-70'>
            <img className='w-10 pr-3 pt-1' src={playIcon}></img>
            <h1 className='pb-1 font-semibold'>Play</h1>
        </button>
        <button className='text-2xl mx-4 py-3 px-8 text-white bg-black bg-opacity-90 rounded-md font-semibold hover:bg-opacity-50'>More info</button>
      </div>
    </div>
  )
}

export default MainContianerTitle

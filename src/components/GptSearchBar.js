import React from 'react'
import { lang } from '../utils/lang'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const getChoosenLang = useSelector((store)=>{return store.lang?.lang})
  return (
    <div className='pt-[10%]'>
    <div className='w-screen flex justify-center'>
      <form className='bg-black p-4 rounded-md w-3/5 grid grid-cols-12'>
        <input type='text' className='py-4 px-4 rounded-l-md col-span-9' placeholder={lang[getChoosenLang].placeholder}/>
        <button className='bg-red-700 py-4 px-4 ml-1 rounded-md-2 rounded-r-md col-span-3 text-xl font-semibold text-white hover:opacity-85'>{lang[getChoosenLang].search}</button>
      </form>
    </div>
    </div>
  )
}

export default GptSearchBar

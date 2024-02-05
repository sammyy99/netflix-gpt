import React from 'react'
import { netflixBG } from '../utils/urls'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
      <div className='-z-10 absolute'>
        <img alt='' src={netflixBG}></img>
      </div>
      <GptSearchBar/>
    </div>
  )
}

export default GptSearch

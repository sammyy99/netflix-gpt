import React from 'react'
import { netflixBG } from '../utils/urls'
import GptSearchBar from './GptSearchBar'
import GptSearchedSuggestions from './GptSearchedSuggestions'

const GptSearch = () => {
  return (
    <div>
      <div className='-z-10 fixed'>
        <img alt='' src={netflixBG}></img>
      </div>
      <GptSearchBar/>
      <GptSearchedSuggestions/>
    </div>
  )
}

export default GptSearch

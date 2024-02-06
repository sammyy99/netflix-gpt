import React from 'react'
import { posterURL } from '../utils/urls'

const MovieCard = ({moviePoster}) => {
  return (
    <div className='min-w-[12rem] w-52 pr-3  transition-transform duration-300 transform hover:scale-110 hover:shadow-md hover:cursor-pointe'>
      <img className='rounded-md' alt='' src={posterURL+moviePoster}></img>
    </div>
  )
}

export default MovieCard

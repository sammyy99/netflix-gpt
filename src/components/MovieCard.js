import React from 'react'
import { posterURL } from '../utils/urls'

const MovieCard = ({moviePoster}) => {
  return (
    <div className='min-w-[12rem] pr-3'>
      <img className='rounded-md' alt='' src={posterURL+moviePoster}></img>
    </div>
  )
}

export default MovieCard

import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSearchedSuggestions = () => {

    const {gptMovies,searchedMovies} = useSelector((store)=>{return store.gpt})
    if(!gptMovies || !searchedMovies) return

  return (
    <div className='bg-black bg-opacity-85 m-16 text-white py-4'>
       {gptMovies.map((movie,index)=>{
         return <MovieList key={movie} title={movie} movies={searchedMovies[index]} />
       })}
    </div>
  )
}

export default GptSearchedSuggestions

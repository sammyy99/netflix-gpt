import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const BrowseSecondryContainer = () => {
  const movies = useSelector((store)=>{return store.movies?.nowPlayingMovies})
  const movies2 = useSelector((store)=>{return store.movies?.popularMovies})
  const movies3 = useSelector((store)=>{return store.movies?.topRatedMovies})

  if(!movies || !movies2 || !movies3)return;

  return (
    <div className='bg-black bg-opacity-95'>
      <div className='-mt-44'>
        <MovieList title={"Now Playing"} movies={movies}/>
        <MovieList title={"Top Rated"} movies={movies3}/>
        <MovieList title={"Popular Movies"} movies={movies2}/>
        <MovieList title={"Because You Watched Action Movies"} movies={movies}/>  
    </div>
    </div>
  )
}

export default BrowseSecondryContainer

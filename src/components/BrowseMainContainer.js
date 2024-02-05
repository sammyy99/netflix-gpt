import React from 'react';
import { useSelector } from 'react-redux';
import MainContainerTitle from './MainContianerTitle';
import MainContainerVideoBG from './MainContainerVideoBG';

const BrowseMainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  if (!movies || movies.length === 0) return

  const mainMovie = movies[1];
  const {original_title,overview,id} = mainMovie

  return (
    <div>
      <MainContainerTitle title={original_title} overview={overview}/>
      <MainContainerVideoBG movieId={id}/>
    </div>
  );
};

export default BrowseMainContainer;

import { useDispatch } from 'react-redux';
import { APIOptions } from '../utils/urls';
import { addMovieTrailer } from '../redux/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();

    const getMoviesVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        APIOptions
      );
      const json = await data.json();
  
      const trailer = json.results.filter((clip) => {
        return clip.name === "Official Trailer";
      });
  
      dispatch(addMovieTrailer(trailer[0]));
    };
  
    useEffect(() => {
      getMoviesVideos();
    }, []);
}

export default useMovieTrailer

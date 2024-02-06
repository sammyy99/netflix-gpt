import { useEffect } from "react";
import { addPopularMovies } from "../redux/moviesSlice";
import { APIOptions } from "../utils/urls";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = ()=>{ // Custom HOOK

const dispatch = useDispatch()
const topRatedMovies = useSelector((store)=>{return store.movies?.topRatedMovies})
const popularMoviesAPI = async () => {  // Fetching data and stroing indside redux store

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      APIOptions
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  
  };

  useEffect(()=>{
    !topRatedMovies && popularMoviesAPI()
  },[])
}

export default usePopularMovies;
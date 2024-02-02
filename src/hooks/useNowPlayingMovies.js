import { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { APIOptions } from "../utils/urls";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = ()=>{ // Custom HOOK

const dispatch = useDispatch()
const nowPlayingMoviesAPI = async () => {  // Fetching data and stroing indside redux store

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      APIOptions
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  
  };

  useEffect(()=>{
     nowPlayingMoviesAPI()
  },[])
}

export default useNowPlayingMovies;
import { useEffect } from "react";
import { addTopRatedMovies} from "../redux/moviesSlice";
import { APIOptions } from "../utils/urls";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = ()=>{ // Custom HOOK

const dispatch = useDispatch()
const popularMovies = useSelector((store)=>{return store.movies?.popularMovies})
const topRatedMoviesAPI = async () => {  // Fetching data and storing indside redux store

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      APIOptions
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results))
  
  };

  useEffect(()=>{
    !popularMovies && topRatedMoviesAPI()
  },[])
}

export default useTopRatedMovies;
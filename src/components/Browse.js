import Authentication from "../utils/Authentication"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowserHeader from "./BrowserHeader";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondryContainer from "./BrowseSecondryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {

  useNowPlayingMovies() // Used Custom Hook
  useTopRatedMovies()
  usePopularMovies()

  return (
    <div>
      <Authentication/>
      <BrowserHeader/>
      <BrowseMainContainer/>
      <BrowseSecondryContainer/>
    </div>

  )
}

export default Browse

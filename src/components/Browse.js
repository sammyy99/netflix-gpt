import Authentication from "../utils/Authentication"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowserHeader from "./BrowserHeader";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondryContainer from "./BrowseSecondryContainer";

const Browse = () => {

  useNowPlayingMovies() // Used Custom Hook

  return (
    <div>
      <BrowserHeader/>
      <BrowseMainContainer/>
      <BrowseSecondryContainer/>
      <Authentication/>
    </div>

  )
}

export default Browse

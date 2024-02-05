import Authentication from "../utils/Authentication";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowserHeader from "./BrowserHeader";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondryContainer from "./BrowseSecondryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const gptSearch = useSelector((store) => {
    return store.gpt?.search;
  });

  useNowPlayingMovies(); // Used Custom Hook
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Authentication />
      <BrowserHeader />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <BrowseMainContainer />
          <BrowseSecondryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

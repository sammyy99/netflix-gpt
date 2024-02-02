import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MainContainerVideoBG = ({ movieId }) => {
  
  const trailerId = useSelector((store)=>{return store.nowPlayingMovies?.movieTrailer.key})
  useMovieTrailer(movieId)

  return (
    <div className="">
      <iframe
      className="w-screen aspect-video "
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&si=0gMs2RUgO1VW52j3`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainContainerVideoBG;

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MainContainerVideoBG = ({ movieId }) => {
  
  const trailerId = useSelector((store)=>{return store.movies?.movieTrailer})
  useMovieTrailer(movieId)

  if (!trailerId) return; // Checking if we got something from redux
  const trailerKey = trailerId.key // storing the key in variable only when we got data from redux

  return (
    <div className="">
      <iframe
      className="w-screen aspect-video "
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
       src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&si=0gMs2RUgO1VW52j3`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainContainerVideoBG;

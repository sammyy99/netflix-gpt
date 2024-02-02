import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" px-16">
      <style>{`.flex::-webkit-scrollbar {display: none;}`}</style> {/*Property to hide scroll bar*/}
      <div>
        <h1 className="py-2 font-semibold text-2xl text-white opacity-90">{title}</h1>
      </div>
      <div className="flex overflow-x-auto pb-8 pt-1">
        {movies.map((movie)=>{
            return <MovieCard key={movie.id} moviePoster={movie.poster_path}/>
        })}
      </div>
    </div>
  );
};

export default MovieList;

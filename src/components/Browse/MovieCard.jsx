import React, { useState } from "react";
import { TMDB_MOVIE_POSTER } from "../../utils/constants";

const MovieCard = (props) => {
  const { movie } = props;
  const { title, overview, poster_path, vote_average } = movie;
  const [isHover, setIsHover] = useState(false);
  if (!poster_path) return null;
  return (
    <div
      className="shrink-0 w-32 sm:w-36 md:w-48 md:hover:drop-shadow-xl cursor-pointer md:hover:scale-110 transition-all ease-in-out duration-500 overflow-hidden"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img
        src={`${TMDB_MOVIE_POSTER}/${poster_path}`}
        alt=""
        className="w-full h-full"
      />
      <div
        className={`relative md:absolute z-50 transition-all ease-in-out duration-500 bg-gradient-to-t from-stone-950 w-32 sm:w-36 md:w-48 p-1 md:p-4 ${
          isHover
            ? "opacity-100 -mt-10 md:-mt-16"
            : "opacity-100 md:opacity-0 -mt-10 md:-mt-16"
        }`}
      >
        <div
          className={`text-xs sm:text-sm text-white  font-semibold truncate`}
        >
          {title}
        </div>
        <div className={`text-xs text-white   `}>
          Rating: {String(vote_average)?.substring(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

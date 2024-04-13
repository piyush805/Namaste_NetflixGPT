import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import lang from "../../utils/languageConstants";

const MovieList = (props) => {
  const { title, movies, first } = props;
  const searchingMovies = useSelector((state) => state.movies?.searchingMovies);
  const selectedLanguage = useSelector((state) => state.config.lang);
  return (
    <div
      className={`pt-2 sm:pt-4 ${
        first ? "bg-gradient-to-t from-stone-950" : "bg-stone-950"
      }`}
    >
      <div className="w-screen flex flex-col gap-2 sm:gap-4 pt-1 sm:pt-4">
        <h2 className="text-white  font-semibold px-4 sm:px-8 md:px-16 text-md sm:text-lg md:text-xl">
          {searchingMovies ? lang[selectedLanguage].searching : title}
        </h2>
        <div className="flex items-center gap-4 overflow-auto px-4 sm:px-8 md:px-16 overflow-y-visible  no-scrollbar py-0 sm:py-4">
          {!searchingMovies &&
            movies?.map((movie, idx) => (
              <MovieCard key={`${movie.title}-${idx}`} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

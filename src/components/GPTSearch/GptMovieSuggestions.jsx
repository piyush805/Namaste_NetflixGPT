import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Browse/MovieList";
import lang from "../../utils/languageConstants";

const GptMovieSuggestions = () => {
  const suggestedMovies = useSelector((store) => store.gpt?.gptSuggestedMovies);
  const searchingMovies = useSelector((state) => state.gpt?.searchingMovies);
  const movieNames = useSelector((store) => store.gpt?.movieNames);
  const selectedLanguage = useSelector((state) => state.config?.lang);
  if (!suggestedMovies) return null;
  if (searchingMovies) {
    return (
      <div className="flex flex-col relative z-10 w-screen overflow-hidden">
        <MovieList
          title={`${lang[selectedLanguage].searching}`}
          movies={[]}
          first
        />
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col relative z-10 w-screen overflow-hidden">
        {movieNames?.map((movieName, idx) => (
          <MovieList
            key={`${movieName}-${idx}`}
            title={movieName}
            movies={suggestedMovies[idx]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

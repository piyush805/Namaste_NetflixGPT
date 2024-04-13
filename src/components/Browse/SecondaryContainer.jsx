import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../../utils/languageConstants";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  const selectedLanguage = useSelector((state) => state.config?.lang);
  const upcomingMovies = useSelector((state) => state.movies?.upcomingMovies);
  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  return (
    <div className=" bg-stone-950 w-screen h-auto pt-[20%] sm:pt-[18%] md:pt-0">
      <div className="flex flex-col  -my-0 xs:-my-16 sm:-my-16  md:-my-8 lg:-my-24 xl:-my-48 relative z-10 w-screen overflow-hidden">
        <MovieList
          title={`${lang[selectedLanguage].nowPlaying}`}
          movies={nowPlayingMovies}
          first
        />
        <MovieList
          title={`${lang[selectedLanguage].upcoming}`}
          movies={upcomingMovies}
        />
        <MovieList
          title={`${lang[selectedLanguage].topRated}`}
          movies={topRatedMovies}
        />
        <MovieList
          title={`${lang[selectedLanguage].popular}`}
          movies={popularMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;

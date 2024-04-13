import React from "react";
import lang from "../../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { openAiAPI } from "../../utils/openai";
import { searchQueryMovieAPI } from "../../services/movies";
import {
  addGPTMovies,
  setGptQuery,
  setSearchingMovies,
} from "../../utils/gptSlice";

const searchMovie = async (movieName, selectedLanguage) =>
  await searchQueryMovieAPI(movieName, selectedLanguage);

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.config?.lang);
  const searchingMovies = useSelector((state) => state.gpt?.searchingMovies);
  const gptQuery = useSelector((state) => state.gpt?.searchQuery);

  const handleSearchButton = async () => {
    dispatch(setSearchingMovies(true)); // loading
    dispatch(addGPTMovies({ movieResults: null, movieNames: null })); // clear previous results
    const res = await openAiAPI(gptQuery); // get 5 movie names from gpt
    const movieNameStr = res?.choices[0]?.message?.content;
    const arr = movieNameStr?.split(",").map((item) => item.trim());
    // search each movie name in tmdb api
    const movieArr = await Promise.all(
      // to get all promises resolved, we have to wait with Promise.all
      arr.map(async (item) => {
        // search each name in api
        const res = await searchMovie(item, lang[selectedLanguage].apiParam);
        return res;
      })
    );
    // add all movie objects to store
    dispatch(addGPTMovies({ movieResults: movieArr, movieNames: arr }));
    dispatch(setSearchingMovies(false));
  };

  return (
    <div className=" pt-[30%] xs:pt-[30%] pb-[5%] sm:pt-[20%]  md:pt-[15%] lg:pt-[10%]">
      <form
        className="w-11/12  sm:w-1/2 bg-black p-2 sm:p-4  mx-auto  flex justify-center gap-2 items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          onChange={(e) => dispatch(setGptQuery(e.target.value))}
          value={gptQuery}
          className="py-1 px-2 sm:py-2 sm:px-4  text-black bg-white w-full mx-auto rounded  focus:outline-none bg-transparent border border-stone-500 text-sm sm:text-md md:text-lg"
          placeholder={`${lang[selectedLanguage].gptSerchPlaceholder}`}
        />
        <button
          className="py-1 px-2 sm:py-2 sm:px-4 bg-red-700 md:hover:bg-red-800 rounded text-sm sm:text-md md:text-lg"
          onClick={handleSearchButton}
          disabled={searchingMovies}
        >
          {searchingMovies
            ? lang[selectedLanguage].searching
            : lang[selectedLanguage].searchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

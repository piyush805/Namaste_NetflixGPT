import React, { useEffect } from "react";
import Header from "../components/Header";
import MainContainer from "../components/Browse/MainContainer.jsx";
import SecondaryContainer from "../components/Browse/SecondaryContainer";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchView from "../components/GPTSearch/GptSearchView";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="w-full ">
      <Header />
      {showGptSearch ? (
        <GptSearchView />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

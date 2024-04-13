import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMoviesAPI } from "../services/movies";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import lang from "../utils/languageConstants";

const useNowPlayingMovies = () => {
  const selectedLanguage = useSelector((state) => state.config?.lang);
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const res = await getNowPlayingMoviesAPI(lang[selectedLanguage].apiParam);
    dispatch(addNowPlayingMovies(res));
  };
  useEffect(() => {
    // if (!nowPlayingMovies) getNowPlayingMovies();
    getNowPlayingMovies();
  }, [selectedLanguage]);
};

export default useNowPlayingMovies;

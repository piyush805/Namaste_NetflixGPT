import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMoviesAPI } from "../services/movies";
import { addPopularMovies } from "../utils/moviesSlice";
import lang from "../utils/languageConstants";

const usePopularMovies = () => {
  const selectedLanguage = useSelector((state) => state.config?.lang);
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const res = await getPopularMoviesAPI(lang[selectedLanguage].apiParam);
    dispatch(addPopularMovies(res));
  };
  useEffect(() => {
    // if (!popularMovies) getPopularMovies();
    getPopularMovies();
  }, [selectedLanguage]);
};

export default usePopularMovies;

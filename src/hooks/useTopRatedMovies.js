import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedMoviesAPI } from "../services/movies";
import { addTopRatedMovies } from "../utils/moviesSlice";
import lang from "../utils/languageConstants";

const useTopRatedMovies = () => {
  const selectedLanguage = useSelector((state) => state.config?.lang);
  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const res = await getTopRatedMoviesAPI(lang[selectedLanguage].apiParam);
    dispatch(addTopRatedMovies(res));
  };
  useEffect(() => {
    // if (!topRatedMovies) getTopRatedMovies();
    getTopRatedMovies();
  }, [selectedLanguage]);
};

export default useTopRatedMovies;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingMoviesAPI } from "../services/movies";
import { addUpcomingMovies } from "../utils/moviesSlice";
import lang from "../utils/languageConstants";

const useUpcomingMovies = () => {
  const selectedLanguage = useSelector((state) => state.config?.lang);
  const upcomingMovies = useSelector((state) => state.movies?.upcomingMovies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const res = await getUpcomingMoviesAPI(lang[selectedLanguage].apiParam);
    dispatch(addUpcomingMovies(res));
  };
  useEffect(() => {
    // if (!upcomingMovies) getUpcomingMovies();
    getUpcomingMovies();
  }, [selectedLanguage]);
};

export default useUpcomingMovies;

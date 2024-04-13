import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieVideosAPI } from "../services/movies";
import { addTrailerVideo } from "../utils/moviesSlice";
import lang from "../utils/languageConstants";

const useMovieTrailer = (movieId) => {
  const selectedLanguage = useSelector((state) => state.config?.lang);
  const movieTrailer = useSelector((state) => state.movies?.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const trailer = await getMovieVideosAPI(
      movieId,
      lang[selectedLanguage].apiParam
    );
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    // if (!movieTrailer) getMovieVideo();
    getMovieVideo();
  }, [movieId, selectedLanguage]);
};

export default useMovieTrailer;

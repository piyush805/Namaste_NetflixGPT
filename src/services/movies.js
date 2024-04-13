import { TMDB_API_OPTIONS } from "../utils/constants";

export const getNowPlayingMoviesAPI = async (selectedLanguage) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=${selectedLanguage}&page=1`,
      TMDB_API_OPTIONS
    );
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
};
export const getPopularMoviesAPI = async (selectedLanguage) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=${selectedLanguage}&page=1`,
      TMDB_API_OPTIONS
    );
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
};
export const getTopRatedMoviesAPI = async (selectedLanguage) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=${selectedLanguage}&page=1`,
      TMDB_API_OPTIONS
    );
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
};
export const getUpcomingMoviesAPI = async (selectedLanguage) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=${selectedLanguage}&page=1`,
      TMDB_API_OPTIONS
    );
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieVideosAPI = async (movieId, selectedLanguage) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=${selectedLanguage}`,
      TMDB_API_OPTIONS
    );
    const data = await res.json();
    const filteredTrailer = data?.results?.filter(
      (video) => video.type === "Trailer"
    );
    // If there is no trailer, return the first video
    const trailer =
      filteredTrailer.length > 0 ? filteredTrailer[0] : data.results[0];
    return trailer;
  } catch (err) {
    console.log(err);
  }
};
export const searchQueryMovieAPI = async (query, selectedLanguage) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=${selectedLanguage}&page=1`,
      TMDB_API_OPTIONS
    );
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
};

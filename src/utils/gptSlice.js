import { createSlice } from "@reduxjs/toolkit";

const state = {
  showGptSearch: false,
  gptSuggestedMovies: null,
  searchingMovies: false,
  movieNames: null,
  searchQuery: "",
};
const gptSlice = createSlice({
  name: "gpt",
  initialState: state,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovies: (state, action) => {
      state.gptSuggestedMovies = action.payload.movieResults;
      state.movieNames = action.payload.movieNames;
    },
    setSearchingMovies: (state, action) => {
      state.searchingMovies = action.payload;
    },
    setGptQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  addGPTMovies,
  setSearchingMovies,
  setGptQuery,
} = gptSlice.actions;
export default gptSlice.reducer;

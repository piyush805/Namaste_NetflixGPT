import { createSlice } from "@reduxjs/toolkit";
import { SUPPORTED_LANGUAGES } from "./constants";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: SUPPORTED_LANGUAGES[0].identifier,
  },
  reducers: {
    setLanguage(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = configSlice.actions;
export default configSlice.reducer;

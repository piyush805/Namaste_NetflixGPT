import { createSlice } from "@reduxjs/toolkit";

const state = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: state,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // state = action.payload
    },
    removeUser: (state) => {
      return null; // state = null
    },
  },
});

// Export reducer to be used in appStore.js
export default userSlice.reducer;
// Export actions to be used in components
export const { addUser, removeUser } = userSlice.actions;

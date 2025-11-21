import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark : false
};

const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    setUser(state) {
      state.dark = !state.dark;
    }
  },
});

export const { setUser } = darkSlice.actions;

export default darkSlice.reducer;

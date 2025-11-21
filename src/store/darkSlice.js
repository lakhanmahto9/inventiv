import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark : false
};

const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    setDark(state) {
      state.dark = !state.dark;
    }
  },
});

export const { setDark } = darkSlice.actions;

export default darkSlice.reducer;

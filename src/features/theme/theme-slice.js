import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      // console.log(state.darkTheme);
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;

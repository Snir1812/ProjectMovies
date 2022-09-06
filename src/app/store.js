import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movies-slice";
import themeReducer from "../features/theme/theme-slice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    theme: themeReducer,
  },
});
export default store;

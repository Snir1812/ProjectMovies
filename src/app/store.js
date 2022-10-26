import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movies-slice";
import themeReducer from "../features/theme/theme-slice";
import commentsReducer from "../features/comments/comments-slice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    theme: themeReducer,
    comments: commentsReducer,
  },
});
export default store;

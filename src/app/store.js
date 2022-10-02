import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movies-slice";
import themeReducer from "../features/theme/theme-slice";
import commentsReducer from "../features/comments/comments-slice";
import searchedQuary from "../features/search-movie/search-movie-slice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    theme: themeReducer,
    comments: commentsReducer,
    searched: searchedQuary,
  },
});
export default store;

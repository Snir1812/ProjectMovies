import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieUrl } from "../../services/movies-service";
import { imageUrl } from "../../services/movies-service";

const initialState = {
  movies: [],
  // search: [],
  error: "",
  loading: false,
};

export const fetchMovies = createAsyncThunk("movie/fetch", (category) => {
  return fetch(movieUrl(category))
    .then((response) => response.json())
    .then((json) => json.results)
    .then((movies) =>
      movies.map((m) => ({
        ...m,
        poster_path: imageUrl(m.poster_path),
        backdrop_path: imageUrl(m.backdrop_path),
        isFavorite: false,
      }))
    );
});

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    toggleFavorite: (state, { payload }) => {
      const index = state.movies.findIndex((m) => m.id === payload);
      if (index !== -1) {
        state.movies[index].isFavorite = !state.movies[index].isFavorite;
      }
      /* let favSaved = localStorage.getItem("movies");
      if (favSaved) {
        const arr = JSON.parse(favSaved);
        arr.push(state.movies[index]);
        localStorage.setItem("movies", JSON.stringify(arr));
      } else {
        localStorage.setItem("movies", JSON.stringify([state.movies[index]]));
      }*/
    },
    removeMovies: (state, action) => {
      state.movies = state.movies.filter((item) => item.id !== action.payload);
    },
    sortAzMovies: (state, action) => {
      state.movies.sort((a, b) => (b.title < a.title ? 1 : -1));
    },
    sortZaMovies: (state, action) => {
      state.movies.sort((a, b) => (b.vote_average > a.vote_average ? 1 : -1));
    },
    search: (state, { payload }) => {
      payload = payload.toLowerCase();
      if (!payload || payload === null || payload.trim().length < 1) {
        state.movies = [...state.movies];
        return;
      }
      state.movies = state.movies.filter((x) =>
        x.title.toLowerCase().includes(payload)
      );
      console.log(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.movies = [];
      // state.search = [];
      state.error = "";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      // state.search = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      // state.search = [];
      state.error = action.error ?? "Something went wrong";
    });
  },
});

export default moviesSlice.reducer;
export const {
  toggleFavorite,
  addMovies,
  removeMovies,
  sortAzMovies,
  sortZaMovies,
  search,
} = moviesSlice.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieUrl } from "../../services/movies-service";
import { imageUrl } from "../../services/movies-service";
// import Swal from "sweetalert2";

const initialState = {
  movies: [],
  error: "",
  loading: false,
};

export const fetchMovies = createAsyncThunk("movie/fetch", () => {
  return fetch(movieUrl)
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
    },
    removeMovies: (state, action) => {
      state.movies = state.movies.filter((item) => item.id !== action.payload);
    },
    sortAzMovies: (state, action) => {
      const title = state.movies.filter((item) => item.title);
      const sortBy = action.payload;
      state.movies = state.movies[title].sort((a, b) => b[sortBy] - a[sortBy]);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.movies = [];
      state.error = "";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = "";
      // Swal.fire({
      //   icon: "success",
      //   titel: "Movies loaded",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.error ?? "Something went wrong";
    });
  },
});

export default moviesSlice.reducer;
export const { toggleFavorite, addMovies, removeMovies, sortAzMovies } =
  moviesSlice.actions;

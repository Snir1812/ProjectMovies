// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { createContext } from "react";
// import { useContext } from "react";
// import React from "react";
// import useMovies from "../hooks/useMovies";
// import { fetchMovies } from "../features/movies/movies-slice";

// const SwitchMovies = createContext(null);

// export const SwitchMoviesContextProvider = ({ children }) => {
//   const [search, setSearch] = useState(null);
//   const [category, setCategory] = useState();
//   const movies = useSelector((state) => state.movie.movies);
//   const [movieResultsSwitch, setMovieResultsSwitch] = useState(movies ?? []);

//   useEffect(() => {
//     if (!search) {
//       return;
//     }
//   }, [search, category]);

//   useEffect(() => {
//     if (search) {
//       return;
//     }
//     //setMovieResultsSwitch([...movies]);
//   }, [search, category]);

//   return (
//     <SwitchMovies.Provider
//       value={{ movieResultsSwitch, category, setSearch, setCategory }}
//     >
//       {children}
//     </SwitchMovies.Provider>
//   );
// };

// const useSwitchMovies = () => {
//   const context = useContext(SwitchMovies);
//   return context;
// };

// export default useSwitchMovies;

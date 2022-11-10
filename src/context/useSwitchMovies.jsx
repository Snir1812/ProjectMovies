import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createContext } from "react";
import { useContext } from "react";
import React from "react";
import useMovies from "../hooks/useMovies";
import { fetchMovies } from "../features/movies/movies-slice";

const SwitchMovies = createContext(null);

export const SwitchMoviesContextProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState();
  const [movieResultsSwitch, setMovieResultsSwitch] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=ad40cc6b3df48398b3ba8f28020bca29&query=${search}`,
    }).then((res) => {
      const result = res.data.results;
      setMovieResultsSwitch(result);
    });
  }, [search, category]);

  useEffect(() => {
    if (search) {
      return;
    }
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=ad40cc6b3df48398b3ba8f28020bca29&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${category}`,
    }).then((res) => {
      const result = res.data.results;
      setMovieResultsSwitch(result);
    });
  }, [search, category]);

  return (
    <SwitchMovies.Provider
      value={{ movieResultsSwitch, category, setSearch, setCategory }}
    >
      {children}
    </SwitchMovies.Provider>
  );
};

const useSwitchMovies = () => {
  const context = useContext(SwitchMovies);
  return context;
};

export default useSwitchMovies;

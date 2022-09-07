import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/movies-slice";

const useMovies = (category) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(category));
  }, []);
};

export default useMovies;

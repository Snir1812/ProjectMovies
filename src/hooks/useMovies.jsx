import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/movies-slice";

const useMovies = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.movie.category);

  useEffect(() => {
    dispatch(fetchMovies(category));
    console.log(category);
  }, [category, dispatch]);
};

export default useMovies;

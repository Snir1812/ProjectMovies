import React from "react";
import { useCategory } from "../hooks/useCategory";
import MovieItem from "../components/movieItem/MovieItem";

const HistoryCategory = () => {
  const [categoryMovie] = useCategory(36);

  return categoryMovie ? (
    <div>
      {categoryMovie.map((movie) => {
        return (
          <div>
            <p>{movie.title}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div>error</div>
  );
};
export default HistoryCategory;

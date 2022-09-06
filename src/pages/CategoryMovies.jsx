import React from "react";
import { useCategory } from "../hooks/useCategory";
import MovieItem from "../components/movieItem/MovieItem";

const CategoryMovies = ({ category }) => {
  const [categoryMovie] = useCategory(category);
  console.log(category);
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  return categoryMovie ? (
    <div>
      {categoryMovie.map((movie) => {
        return (
          <div>
            {/* <p>{category}</p> */}
            <p>{movie.title}</p>
            {/* <p>{movie.original_title}</p> */}
            <img
              className="img-card"
              src={urlImage + movie.poster_path}
              alt="movie poster"
            />
          </div>
        );
      })}
    </div>
  ) : (
    <div>error</div>
  );
};
export default CategoryMovies;

import React from "react";
import { useCategory } from "../hooks/useCategory";
import MovieItem from "../components/movieItem/MovieItem";
// import { useNavigate } from "react-router-dom";
// import "../components/movieItem/MovieItem.css";
// import "../components/Movies.css";
import AddRemoveFavoriteButton from "../components/AddRemoveFavoriteButton";
import DeleteMovieButton from "../components/DeleteMovieButton";

const CategoryMovies = ({ category }) => {
  // const navigate = useNavigate();
  const [categoryMovie] = useCategory(category);
  console.log(category);
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  return categoryMovie ? (
    <div className="container">
      <div className="card-list">
        {categoryMovie.map((movie) => {
          return (
            <div className="card-item">
              {/* <p>{category}</p> */}
              {/* <p>{movie.title}</p> */}
              {/* <p>{movie.original_title}</p> */}
              <img
                className="img-card"
                src={urlImage + movie.poster_path}
                alt="movie poster"
              />
              {/* <div className="item-icons">
                <AddRemoveFavoriteButton movie={movie} />
                <button
                  className="btn-read-more"
                  onClick={() => {
                    navigate(`/movies/${movie.id}`);
                  }}
                >
                  Read More
                </button>
                <DeleteMovieButton movie={movie} />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>error</div>
  );
};
export default CategoryMovies;

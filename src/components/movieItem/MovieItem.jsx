import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieItem.css";
import DeleteMovieButton from "../DeleteMovieButton";
import AddRemoveFavoriteButton from "../AddRemoveFavoriteButton";
import { imageUrl } from "../../services/movies-service";
import { useSelector } from "react-redux";

const MovieItem = ({ movie }) => {
  const darkToggle = useSelector((state) => state.theme);
  const navigate = useNavigate();

  return (
    <div className="card-item">
      <div className="average">{movie.vote_average}</div>
      <img
        className="img-card"
        src={imageUrl(movie.poster_path)}
        alt="movie poster"
      />
      <div className="item-icons">
        <AddRemoveFavoriteButton movie={movie} />
        <button
          className={
            darkToggle.darkTheme ? "btn-read-more-dark" : "btn-read-more"
          }
          onClick={() => {
            navigate(`/movies/${movie.id}`);
          }}
        >
          Read More
        </button>
        <DeleteMovieButton movie={movie} />
      </div>
    </div>
  );
};

export default MovieItem;

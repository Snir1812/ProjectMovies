import React from "react";
import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./MovieItem.css";
import DeleteMovieButton from "../DeleteMovieButton";
import AddRemoveFavoriteButton from "../AddRemoveFavoriteButton";
import { imageUrl } from "../../services/movies-service";

const MovieItem = ({ movie }) => {
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
          className="btn-read-more"
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

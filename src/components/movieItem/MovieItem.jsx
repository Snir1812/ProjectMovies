import React from "react";
import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./MovieItem.css";
import DeleteMovieButton from "../DeleteMovieButton";
import AddRemoveFavoriteButton from "../AddRemoveFavoriteButton";

const MovieItem = ({ movie }) => {
  const navigate = useNavigate();
  // const style_average = {
  //   color: "white",
  //   fontSize: "18px",
  //   position: "relative",
  //   bottom: "22.4rem",
  //   right: "5.5rem",
  //   textShadow: "2px 2px black",
  //   background: "rgba(0, 0, 0, 0.233)",
  //   borderRadius: "15px",
  //   width: "30px",
  //   textAlign: "center",
  // };
  // console.log(movie.title);

  return (
    <div className="card-item">
      <div className="average">{movie.vote_average}</div>
      <img className="img-card" src={movie.poster_path} alt="movie poster" />
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

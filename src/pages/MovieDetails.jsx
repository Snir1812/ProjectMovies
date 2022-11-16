import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "../components/MovieDetails.css";
import { imageUrl } from "../services/movies-service";

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkToggle = useSelector((state) => state.theme);

  const mid = Number(movieId);
  const movie = useSelector((state) => state.movie.search).find(
    (m) => m.id === mid
  );

  const iconStyles = { color: "red", fontSize: "30px" };

  if (!movie) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container item-div">
      <div
        className={
          darkToggle.darkTheme
            ? "container item-details-dark"
            : "container item-details"
        }
      >
        <img
          className="img-details"
          src={imageUrl(movie.poster_path)}
          alt="movie poster"
        />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
          <div className="icons-details">
            <button
              className={darkToggle.darkTheme ? "btn-back-dark" : "btn-back"}
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
            <button
              className="btn border-0"
              onClick={() => {
                dispatch(toggleFavorite(movie.id));
              }}
            >
              {movie.isFavorite && <MdOutlineFavorite style={iconStyles} />}
              {!movie.isFavorite && (
                <MdOutlineFavoriteBorder style={iconStyles} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

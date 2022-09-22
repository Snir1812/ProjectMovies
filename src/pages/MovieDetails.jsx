import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "../components/MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkToggle = useSelector((state) => state.theme);

  const mid = Number(movieId);
  const movie = useSelector((state) => state.movie.movies).find(
    (m) => m.id === mid
  );

  const iconStyles = { color: "red", fontSize: "30px" };

  if (!movie) {
    return <Navigate to={"/"} />;
  }

  return (
    <div
      // className="container item-details"
      className={
        darkToggle.darkTheme
          ? "container item-details-dark"
          : "container item-details"
      }
    >
      <h2>{movie.title}</h2>
      <img className="img-details" src={movie.poster_path} alt="movie poster" />
      <p>{movie.overview}</p>

      <p>{movie.release_date}</p>
      {/* <img
        className="w-50 shadow-lg p-3 mb-5 bg-white rounded card"
        src={movie.backdrop_path}
        alt="movie poster"
      /> */}
      <div className="icons-details">
        <button
          className="btn-back"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <button
          className="btn border-0"
          onClick={(e) => {
            dispatch(toggleFavorite(movie.id));
          }}
        >
          {movie.isFavorite && <MdOutlineFavorite style={iconStyles} />}
          {!movie.isFavorite && <MdOutlineFavoriteBorder style={iconStyles} />}
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;

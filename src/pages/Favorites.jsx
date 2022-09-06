import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../components/movieItem/MovieItem";
import "../components/Movies.css";

const Favorites = () => {
  const movies = useSelector((s) => s.movie.movies).filter((m) => m.isFavorite);

  return (
    <div className="container">
      <div className="card-list">
        {movies.map((m) => (
          <MovieItem key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

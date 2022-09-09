// import React, { useEffect } from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import MovieItem from "../components/movieItem/MovieItem";
import "../components/Movies.css";

const Favorites = () => {
  const movies = useSelector((s) => s.movie.movies).filter((m) => m.isFavorite);
  /**const [movies, setMovies] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("movies");
    if (saved) {
      setMovies(JSON.parse(saved));
    }
  }, []);
  **/
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

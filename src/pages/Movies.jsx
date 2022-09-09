import { useSelector } from "react-redux";
import MovieItem from "../components/movieItem/MovieItem";
import "../components/Movies.css";
import SortAzButton from "../components/sortAzButton/SortAzButton";
import SortZaButton from "../components/sortZaButton/SortZaButton";
import useMovies from "../hooks/useMovies";

const Movies = ({ category }) => {
  const movies = useSelector((s) => s.movie.movies);
  useMovies(category);
  // console.log(category);

  return (
    <div className="container">
      <div className="sort-buttons-div">
        <SortAzButton />
        <SortZaButton />
      </div>
      <div className="card-list">
        {movies.map((m) => (
          <MovieItem key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default Movies;

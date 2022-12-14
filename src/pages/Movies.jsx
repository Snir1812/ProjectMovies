import { useSelector } from "react-redux";
import MovieItem from "../components/movieItem/MovieItem";
import "../components/Movies.css";
import Search from "../components/search/Search";
import SortAzButton from "../components/sortAzButton/SortAzButton";
import SortRatingButton from "../components/sortRatingButton/SortRatingButton";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  useMovies();
  const movies = useSelector((state) => state.movie.search);
  return (
    <div className="container">
      <div className="search-div">
        <Search />
        <div>
          <SortAzButton />
          <SortRatingButton />
        </div>
      </div>
      <div className="card-list">
        {movies.map((m) => (
          <MovieItem key={m.id} movie={m} title={m.title} />
        ))}
      </div>
    </div>
  );
};

export default Movies;

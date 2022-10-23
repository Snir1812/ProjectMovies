import { useSelector } from "react-redux";
import MovieItem from "../components/movieItem/MovieItem";
import "../components/Movies.css";
import Search from "../components/search/Search";
import SortAzButton from "../components/sortAzButton/SortAzButton";
import SortRatingButton from "../components/sortRatingButton/SortRatingButton";
import useMovies from "../hooks/useMovies";
import { useSearchMovies } from "../hooks/searchMovie";
// import { useSelector } from "react-redux";

const Movies = ({ category, searchedQuary }) => {
  // const searchedQuary = useSelector((state) => state.searched.quary);
  const [movies1] = useSearchMovies(searchedQuary);
  const movies = useSelector((s) => s.movie.movies);
  const searched = useSelector((state) => state.searched.quary);
  useMovies(category);
  // console.log(movies.map((x) => x.release_date));
  // console.log(movies);

  return !searched ? (
    <div className="container">
      <div className="search-div">
        <div>
          <SortAzButton />
          <SortRatingButton />
        </div>
        <Search />
      </div>
      {/* <div></div> */}
      <div className="card-list">
        {movies.map((m) => (
          <MovieItem key={m.id} movie={m} title={m.title} />
        ))}
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="search-div">
        <div>
          <SortAzButton />
          <SortRatingButton />
        </div>
        <Search />
      </div>
      <div></div>
      <div className="card-list">
        {movies1.map((m) => (
          <MovieItem key={m.id} movie={m} title={m.title} />
        ))}
      </div>
    </div>
  );
};

export default Movies;

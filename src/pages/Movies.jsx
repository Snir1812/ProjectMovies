import { useSelector } from "react-redux";
import MovieItem from "../components/movieItem/MovieItem";
import "../components/Movies.css";
import Search from "../components/search/Search";
import SortAzButton from "../components/sortAzButton/SortAzButton";
import SortRatingButton from "../components/sortRatingButton/SortRatingButton";
import useMovies from "../hooks/useMovies";
import { useSearchMovies } from "../hooks/searchMovie";
// import { useSelector } from "react-redux";
import useSwitchMovies from "../context/useSwitchMovies";
import { useEffect } from "react";

const Movies = ({ category }) => {
  const { movieResultsSwitch, setCategory } = useSwitchMovies(category);

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
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
        {movieResultsSwitch.map((m) => (
          <MovieItem key={m.id} movie={m} title={m.title} />
        ))}
      </div>
    </div>
  );
};

export default Movies;

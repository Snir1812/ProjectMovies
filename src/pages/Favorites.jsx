import { useSelector } from "react-redux";
import MovieItem from "../components/movieItem/MovieItem";
import "../components/Movies.css";
import "../components/GeneralPageCss.css";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const movies = useSelector((s) => s.movie.search).filter((m) => m.isFavorite);
  const darkToggle = useSelector((state) => state.theme);
  const navigate = useNavigate();

  return movies < 1 ? (
    <div
      className={darkToggle.darkTheme ? "general-page-dark" : "general-page"}
    >
      <p>The favorites page is empty</p>
      <p>
        To add movies to your favorites , click on the button and select Movies
      </p>
      <button
        className="btn btn-back"
        onClick={() => {
          navigate("/movies");
        }}
      >
        Click Me
      </button>
    </div>
  ) : (
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

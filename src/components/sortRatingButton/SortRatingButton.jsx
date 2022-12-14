import React from "react";
import { FcRating } from "react-icons/fc";
import "./SortRatingButton.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortZaMovies } from "../../features/movies/movies-slice";

const SortRatingButton = () => {
  const darkToggle = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleSortZaMovie = () => {
    dispatch(sortZaMovies());
    console.log("sorted");
  };

  return (
    <button className="za-button">
      <FcRating
        className="za-icon"
        onClick={handleSortZaMovie}
        color={darkToggle.darkTheme ? "white" : "black"}
      />
    </button>
  );
};

export default SortRatingButton;

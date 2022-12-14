import React from "react";
import { BsSortAlphaDown } from "react-icons/bs";
import "./SortAzButton.css";
import { useDispatch } from "react-redux";
import { sortAzMovies } from "../../features/movies/movies-slice";
import { useSelector } from "react-redux";

const SortAzButton = () => {
  const dispatch = useDispatch();
  const darkToggle = useSelector((state) => state.theme);

  const handleSortAzMovie = () => {
    dispatch(sortAzMovies());
    console.log("sorted");
  };

  return (
    <button className="az-button">
      <BsSortAlphaDown
        className="az-icon"
        onClick={handleSortAzMovie}
        color={darkToggle.darkTheme ? "white" : "black"}
      />
    </button>
  );
};

export default SortAzButton;

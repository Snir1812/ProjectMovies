import React from "react";
import { useDispatch } from "react-redux";
import { removeMovies } from "../features/movies/movies-slice";
import { FaTrash } from "react-icons/fa";

const DeleteMovieButton = ({ movie }) => {
  const dispatch = useDispatch();

  const handleDeleteMovie = () => {
    dispatch(removeMovies(movie.id));
    console.log("Removed");
  };

  const deleteIconStyle = { fontSize: "19px" };

  return (
    <button className="btn-icon-genarel">
      <FaTrash style={deleteIconStyle} onClick={handleDeleteMovie} />
    </button>
  );
};

export default DeleteMovieButton;

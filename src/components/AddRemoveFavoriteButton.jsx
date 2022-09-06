import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const AddRemoveFavoriteButton = ({ movie }) => {
  const dispatch = useDispatch();

  const iconStyles = { color: "red", fontSize: "25px" };

  const handleAddRemoveFavorite = () => {
    dispatch(toggleFavorite(movie.id));
  };

  return (
    <button className="btn-icon-genarel" onClick={handleAddRemoveFavorite}>
      {movie.isFavorite && <MdOutlineFavorite style={iconStyles} />}
      {!movie.isFavorite && <MdOutlineFavoriteBorder style={iconStyles} />}
    </button>
  );
};

export default AddRemoveFavoriteButton;

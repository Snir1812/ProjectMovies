import React from "react";
import "./Search.css";
import { search } from "../../features/movies/movies-slice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.movie.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(e.target[0].value, category, dispatch);
  };

  return (
    <form className=" d-flex " onSubmit={(e) => handleSubmit(e)}>
      <input
        name="text"
        type="search"
        placeholder="Search"
        className="search"
        aria-label="Search"
      />
      <button className="button-search" type="submit">
        <IoMdSearch />
      </button>
    </form>
  );
};

export default Search;

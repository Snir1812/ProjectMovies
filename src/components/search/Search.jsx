import React from "react";
import "./Search.css";
// import { search } from "../../features/movies/movies-slice";
import { Button, Form } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { ChangeQuary } from "../../features/search-movie/search-movie-slice";
import { useState } from "react";
import { useSearchMovies } from "../../hooks/searchMovie";
import MovieItem from "../movieItem/MovieItem";
import { search } from "../../features/movies/movies-slice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.movie.category);
  // const [text, setText] = useState();
  // const [results] = useSearchMovies(text);
  // console.log(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(e.target[0].value, category, dispatch);
    // console.log(results.result);
  };

  // const SearchedItem = () => {
  //   if (!results || !results.result) return null;
  //   return (
  //     <div className="card-list">
  //       {results.result.map((m) => {
  //         return <MovieItem key={m.id} movie={m} title={m.title} />;
  //       })}
  //     </div>
  //   );
  // };

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
      {/* <SearchedItem /> */}
    </form>
  );
};

export default Search;

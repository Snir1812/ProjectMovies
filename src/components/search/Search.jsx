import React from "react";
import "./Search.css";
// import { search } from "../../features/movies/movies-slice";
import { Button, Form } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { ChangeQuary } from "../../features/search-movie/search-movie-slice";
import { useState } from "react";
import { useSearchMovies } from "../../hooks/searchMovie";
import MovieItem from "../movieItem/MovieItem";
import useSwitchMovies from "../../context/useSwitchMovies";
import { search } from "../../features/movies/movies-slice";
import { useDispatch } from "react-redux";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const dispatch = useDispatch();
  // const [text, setText] = useState();
  // const [results] = useSearchMovies(text);
  // console.log(search);

  const handleSubmit = (text) => {
    dispatch(search(text));
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
    <div className=" d-flex ">
      <input
        name="text"
        type="search"
        placeholder="Search"
        className="search"
        aria-label="Search"
      />
      <button
        className="button-search"
        onClick={(e) => handleSubmit(e.target.value)}
      >
        <IoMdSearch />
      </button>
      {/* <SearchedItem /> */}
    </div>
  );
};

export default Search;

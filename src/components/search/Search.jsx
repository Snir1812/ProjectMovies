import React from "react";
import "./Search.css";
// import { search } from "../../features/movies/movies-slice";
import { Button, Form } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { ChangeQuary } from "../../features/search-movie/search-movie-slice";
import { useState } from "react";
import { useSearchMovies } from "../../hooks/searchMovie";

const Search = () => {
  // const dispatch = useDispatch();
  const [text, setText] = useState();
  const [results] = useSearchMovies(text);
  // console.log(search);

  const handleSubmit = (text) => {
    setText(text);
    console.log(results.result);
  };

  return (
    <Form className=" d-flex ">
      <input
        type="search"
        placeholder="Search"
        className="me-2 text-center search"
        aria-label="Search"
        onChange={(e) => handleSubmit(e.target.value)}
      />
      {results && JSON.stringify(results.result)}
      {/* <Button variant="outline-light" >
        Search
      </Button> */}
    </Form>
  );
};

export default Search;

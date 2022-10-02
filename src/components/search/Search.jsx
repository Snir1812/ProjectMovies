import React from "react";
import "./Search.css";
import { search } from "../../features/movies/movies-slice";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ChangeQuary } from "../../features/search-movie/search-movie-slice";

const Search = () => {
  const dispatch = useDispatch();
  // console.log(search);

  return (
    <Form className=" d-flex ">
      <input
        type="search"
        placeholder="Search"
        className="me-2 text-center search"
        aria-label="Search"
        onChange={(e) => dispatch(ChangeQuary(e.target.value))}
      />
      {/* <Button variant="outline-light" >
        Search
      </Button> */}
    </Form>
  );
};

export default Search;

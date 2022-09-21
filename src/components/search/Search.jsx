import React from "react";
import "./Search.css";
import { search } from "../../features/movies/movies-slice";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

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
        onChange={(e) => dispatch(search(e.target.value))}
      />
      {/* <Button variant="outline-light" onClick={() => {}}>
        Search
      </Button> */}
    </Form>
  );
};

export default Search;

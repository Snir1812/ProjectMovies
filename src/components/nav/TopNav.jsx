import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import TopNavLink from "./TopNavLink";
import "./TopNav.css";
import DarkToggle from "../DarkToggle";
import { useDispatch, useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import {
  changeCategory,
  fetchMovies,
} from "../../features/movies/movies-slice";
// import LoginButton from "../login/LoginButton";
// import Search from "../search/Search";

const TopNav = () => {
  const darkToggle = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const setCategory = (category) => {
    dispatch(changeCategory(category));
  };

  return (
    <Navbar
      expand="lg"
      className={darkToggle.darkTheme ? "navbar-dark" : "navbar"}
    >
      <Container className=" gap-3">
        <NavLink to="/" className="navbar-brand logo-icon">
          <span color={darkToggle.darkTheme ? "black" : "white"}>
            Movie App
          </span>
          <MdMovieFilter color={darkToggle.darkTheme ? "white" : "black"} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="humburger" />
        {/* --- */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <TopNavLink to="/" label="Home" />
            <Dropdown as={ButtonGroup}>
              <span onClick={() => dispatch(fetchMovies(""))}>
                <TopNavLink to="/movies" label="Movies" />
              </span>
              <Dropdown.Toggle
                split
                variant="basic"
                id="dropdown-split-basic"
                className="border-0"
              />
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setCategory("36")}>
                  History
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCategory("18")}>
                  Drama
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCategory("35")}>
                  Comedy
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCategory("10749")}>
                  Romance
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCategory("28")}>
                  Action
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <TopNavLink to="/favorites" label="Favorites" />
            <TopNavLink to="/about" label="About" />
            <TopNavLink to="/comments" label="Comments" />
          </Nav>
        </Navbar.Collapse>
        {/* <div className=" d-flex gap-3 justify-content-center align-items-center"> */}
        {/* <Search /> */}
        {/* <LoginButton /> */}
        <DarkToggle />
        {/* </div> */}
        {/* <Search /> */}
      </Container>
    </Navbar>
  );
};

export default TopNav;

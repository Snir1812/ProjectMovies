import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import TopNavLink from "./TopNavLink";
import "./TopNav.css";
import DarkToggle from "../DarkToggle";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
const TopNav = () => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <Navbar
      expand="lg"
      className={darkToggle.darkTheme ? "navbar-dark" : "navbar"}
    >
      <Container>
        <NavLink to="/" className="navbar-brand logo-icon">
          <span color={darkToggle.darkTheme ? "black" : "white"}>
            Movie App
          </span>
          <MdMovieFilter color={darkToggle.darkTheme ? "white" : "black"} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* --- */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <TopNavLink to="/" label="Home" />
            <TopNavLink to="/movies" label="Movies" />
            <TopNavLink to="/favorites" label="Favorites" />
            <TopNavLink to="/about" label="About" />
            {/* <Dropdown as={ButtonGroup}>
              <Button variant="basic" href="/movies">
                Split Button
              </Button>

              <Dropdown.Toggle
                split
                variant="basic"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Nav>
        </Navbar.Collapse>
        <DarkToggle />
      </Container>
    </Navbar>
  );
};

export default TopNav;

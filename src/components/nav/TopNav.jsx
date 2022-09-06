import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import TopNavLink from "./TopNavLink";
import "./TopNav.css";
import DarkToggle from "../DarkToggle";
import { useSelector } from "react-redux";

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
          </Nav>
        </Navbar.Collapse>
        <DarkToggle />
      </Container>
    </Navbar>
  );
};

export default TopNav;

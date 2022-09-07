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
            <Dropdown as={ButtonGroup}>
              <TopNavLink to="/movies" label="Movies" />
              <Dropdown.Toggle
                split
                variant="basic"
                id="dropdown-split-basic"
                className="border-0"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="/history">History</Dropdown.Item>
                <Dropdown.Item href="/drama">Drama</Dropdown.Item>
                <Dropdown.Item href="/comedy">Comedy</Dropdown.Item>
                <Dropdown.Item href="/romance">Romance</Dropdown.Item>
                <Dropdown.Item href="/action">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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

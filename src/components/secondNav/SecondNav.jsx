import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./SecondNav.css";

const SecondNav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      // variant="dark"
      className="second-nav"
    >
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="humburger"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-link">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <NavDropdown title="Movies" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/movies"> general</NavDropdown.Item>
              <NavDropdown.Item href="/history">History</NavDropdown.Item>
              <NavDropdown.Item href="/drama">Drama</NavDropdown.Item>
              <NavDropdown.Item href="/comedy">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="/romance">Romance</NavDropdown.Item>
              <NavDropdown.Item href="/action">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default SecondNav;

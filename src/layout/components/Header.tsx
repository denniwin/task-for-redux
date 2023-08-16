import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className="nav-link" to={"/postslist"}>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <input type="text" />
          {/* <Nav className="me-auto">
          <Nav.Link href="#features">Список постов</Nav.Link>
          <Nav.Link href="#pricing">Обо мне</Nav.Link>
        </Nav> */}
          <Nav className="ms-auto">
            <NavLink className="nav-link" to={"/postslist"}>
              Список постов
            </NavLink>
            <NavLink className="nav-link" to={"/about"}>
              Обо мне
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

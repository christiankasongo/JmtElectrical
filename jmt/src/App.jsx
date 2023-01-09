import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "./assets/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div>
        <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand className="me-2" href="#home">
                <img src={logo} alt="Logo" height="70px" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#pricing">About</Nav.Link>
                  <Nav.Link href="#pricing">Services</Nav.Link>
                  <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </div>
    </>
  );
};

export default App;

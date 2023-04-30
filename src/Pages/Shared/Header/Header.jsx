import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favor</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={80}>
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link> profile</Nav.Link>
              <Button variant="secondary">
                <Nav.Link className="text-white" href="#deets">
                  Login
                </Nav.Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;

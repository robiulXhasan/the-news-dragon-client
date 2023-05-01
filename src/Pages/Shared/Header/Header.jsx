import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavBar from "./SharedNav";
import SharedNav from "./SharedNav";
const Header = () => {
  return (
    <Container>
      <div className="text-center my-4">
        <img src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favor</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex mb-4">
        <Button variant="danger">Latest</Button>
        <Marquee speed={80}>
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
     <SharedNav></SharedNav>
    </Container>
  );
};

export default Header;

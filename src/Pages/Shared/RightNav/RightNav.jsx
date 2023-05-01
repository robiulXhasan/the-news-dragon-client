import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <div>
        <h4 className="fw-bold mt-5">Login With</h4>
        <Button className="mb-3 w-100" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>

        <Button className="w-100" variant="outline-secondary">
          <FaGithub /> Login with GitHub
        </Button>
      </div>
      <div className="mt-5">
        <h4 className="fw-bold">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;

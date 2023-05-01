import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const SharedNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-4">
              <Link className="text-decoration-none text-black fw-semibold" to="/">
                Home
              </Link>

              <Link className="text-decoration-none text-black fw-semibold" to="/">
                About
              </Link>

              <Link className="text-decoration-none text-black fw-semibold" to="/">
                Career
              </Link>
            </Nav>
            <Nav className="align-items-center">
              {user && (
                <Nav.Link>
                  {user?.photoURL ? <img src={user.photoURL}></img> : <FaUserCircle />}
                </Nav.Link>
              )}
              <Button variant="secondary">
                {user ? (
                  <Link
                    onClick={handleLogOut}
                    className="text-decoration-none text-white fw-semibold"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link to="/login" className="text-decoration-none text-white fw-semibold">
                    Login
                  </Link>
                )}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default SharedNav;

import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { AuthContext } from "../../Providers/AuthProvider";
const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        profileUpdate(name, photoURL)
          .then(() => {
            console.log("successfully updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handlePrivacy = (event) => {
    if (event.target.checked) {
      setAccepted(true);
    } else {
      setAccepted(false);
    }
  };
  return (
    <Container>
      <div className="mx-auto w-50 my-5 p-5 shadow bg-white">
        <h3 className="text-center fw-bold">Register your account</h3>
        <hr />
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              className="bg-light p-3"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your photo URL"
              name="photo"
              className="bg-light p-3"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="bg-light p-3"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              className="bg-light p-3"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              onClick={handlePrivacy}
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept <Link to="/login/terms">Terms & Conditions</Link>
                </>
              }
              required
            />
          </Form.Group>
          <Button variant="dark" disabled={!accepted} type="submit" className="w-100 p-2 fs-5">
            Register
          </Button>
        </Form>
        <p className="text-center mt-2">
          <small>Already Have An Account ? </small>{" "}
          <Link to="/login" className="text-decoration-none text-warning fw-bold">
            Login
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;

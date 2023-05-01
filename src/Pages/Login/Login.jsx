import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { LoginUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    LoginUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("successfully logged in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const managePassword = (event) => {
    if (event.target.checked) {
      setShow(!show);
    } else {
      setShow(false);
    }
  };
  return (
    <Container>
      <div className="mx-auto w-50 my-5 p-5 shadow bg-white">
        <h3 className="text-center fw-bold">Login your account</h3>
        <hr />
        <Form onSubmit={handleLogin}>
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
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              className="bg-light p-3"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" onClick={managePassword} label="Show Password" />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100 p-2 fs-5">
            Login
          </Button>
        </Form>
        <p className="text-center mt-2">
          <small>Don’t Have An Account ? </small>{" "}
          <Link to="/login/register" className="text-decoration-none text-warning fw-bold">
            Register
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;

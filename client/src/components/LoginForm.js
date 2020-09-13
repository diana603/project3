import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Form, Button, Container } from "react-bootstrap";
import Axios from "axios";
import User from "../pages/assets/user.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";


const LoginForm = (props) => {
  const { setIsAuth } = useContext(AuthContext);
  const emptyCreds = { emailInput: "", passwordInput: "" };
  const errorMessage = "Please Fill In All Sections";
  const [formData, setFormData] = useState(emptyCreds);
  const [credsAreInvalid, setCredsAreInvalid] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const inputCreds = {
      email: formData.emailInput,
      password: formData.passwordInput,
    };
    login(inputCreds);
    setFormData(emptyCreds);
  };

  const login = (loginCreds) => {
    Axios.post("/api/auth/login", loginCreds)
      .then((user) => {
        console.log("login response ", user);
        setIsAuth(true);
      })
      .catch((err) => {
        setCredsAreInvalid(errorMessage);
        console.log(err);
      });
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit} className="LForm" >
        <Form.Group controlId="emailInput">
          <Form.Label className="loginInput">Email Address</Form.Label>
          <Form.Control
            name="emailInput"
            type="email"
            placeholder="Enter email"
            value={formData.emailInput}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="inputPassword">
          <Form.Label className="loginInput">Password</Form.Label>
          <Form.Control
            name="passwordInput"
            type="password"
            placeholder="Password"
            value={formData.passwordInput}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-danger">{credsAreInvalid}</Form.Text>
        </Form.Group>
        <Button className="m-1" variant="primary" type="submit">
          Login
        </Button>
        <Link to="/signUp" className="signLink">Not a Member? Sign Up!</Link>
      </Form>
    </>
  );
};

export default LoginForm;

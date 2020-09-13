import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "../components/LoginForm";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Jumbotron } from "react-bootstrap";

function Login(props) {
  const { isAuth } = useContext(AuthContext);
  console.log("login auth: ", isAuth);

  return isAuth ? (
    <Redirect to="/" />
  ) : (
    <>
      <Nav/>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <br></br>
          <Jumbotron className="LoginPage">Login</Jumbotron>
          <LoginForm {...props} />
        </Col>
      </Row>
   </>
  );
}

export default Login;

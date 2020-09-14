import React from 'react';
import "../App.css";
import Register from "../components/SignupForm";
import { Container, Row, Col, Jumbotron } from "react-bootstrap/";
import Nav from "../components/Nav";

function Signup(props) {
  return (
    <>
        <Nav/>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <br></br>
          <Jumbotron className="LoginPage">Sign Up</Jumbotron>
            <Register {...props}/>
          </Col>
        </Row>
    </>
  );
}

export default Signup;

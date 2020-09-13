import React from 'react';
import "../App.css";
import Register from "../components/SignupForm";
import { Container, Row, Col } from "react-bootstrap/";
import Nav from "../components/Nav";

function Signup(props) {
  return (
    <>
    <Container className="signup">
      <Nav />
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Register {...props} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Signup;

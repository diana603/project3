import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Jumbotron, Container, Button } from 'react-bootstrap';

function AutoIns() {
  return (
    <>
      <Nav />
      <Container className="homeins">
        <Jumbotron className="myJumbotron" fluid>
          <h1 className="text"> Home Insurance</h1>

          <p>Buying a house is one of the biggest, if not the biggest investment you make in your life. That's why you need to protect it.</p>
        </Jumbotron>
      </Container>
      <Footer />
    </>
  )
};

export default AutoIns;
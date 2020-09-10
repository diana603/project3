import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import inspages from './inspages.css';

function AutoIns() {
  return (
    <>
      <Nav />
      <Jumbotron className="myJumbotron" fluid>
        <h1 className="text"> Auto Insurance</h1>
      </Jumbotron>
      <Container className="inspage">
        <Row>
          <Col md={{ span: 5 }}
            style={{ textAlign: "justify" }}>

            <p>Vehicle insurance (also known as car insurance, motor insurance, or auto insurance) is insurance for cars, trucks, motorcycles, and other road vehicles. Its primary use is to provide financial protection against physical damage or bodily injury resulting from traffic collisions and against liability that could also arise from incidents in a vehicle.</p> <p>Vehicle insurance may additionally offer financial protection against theft of the vehicle, and against damage to the vehicle sustained from events other than traffic collisions, such as keying, weather or natural disasters, and damage sustained by colliding with stationary objects. The specific terms of vehicle insurance vary with legal regulations in each region.</p>

            <p style={{ textAlign: "right" }}><cite>Definition by Wikipedia</cite></p>

          </Col>
          <Col md={{ span: 7 }}>

            < img src={'../assets/img/car_1920.jpg'}
              style={{ height: "450px" }} />;
</Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
};

export default AutoIns;
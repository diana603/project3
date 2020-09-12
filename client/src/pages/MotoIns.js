import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import inspages from './inspages.css';

function MotoIns() {
  return (
    <>
      <Nav />
      <Jumbotron className="myJumbotron" fluid>
        <h1 className="text"> Motorcycle Insurance</h1>
      </Jumbotron>
      <Container className="inspage">
        <Row>
          <Col md={{ span: 5 }}
            style={{ textAlign: "justify" }}>

            <p>Vehicle insurance (also known as car insurance, motor insurance, or auto insurance) is insurance for cars, trucks, motorcycles, and other road vehicles. Its primary use is to provide financial protection against physical damage or bodily injury resulting from traffic collisions and against liability that could also arise from incidents in a vehicle.</p> <p>Ride a motorcycle? Better make sure all your insurance coverage is in place, and get multiple quotes to ensure you get the best motorcycle insurance. "Best" doesn't just mean cheapest. The minimum required coverage may leave you with stacks of bills if you have to lay your bike down. Yet motorcycle insurance can be less expensive than car insurance, and you are entitled to most of the same discounts.</p>

            <p style={{ textAlign: "right" }}><cite>Definition by Wikipedia & Insurance.com</cite></p>

          </Col>
          <Col md={{ span: 7 }}>

            < img src={'../assets/img/motorcycle_1920.jpg'}
              style={{ height: "450px" }} />;
</Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
};

export default MotoIns;
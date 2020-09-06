import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Jumbotron, Container, Button, Col } from 'react-bootstrap';

function LifeIns() {
  return (
    <>
      <Nav />
      <Container className="inspages">
        <Jumbotron className="myJumbotron" fluid>
          <h1 className="text">Life Insurance</h1>
        </Jumbotron>
        <Col md={{ span: 6 }}>

          <p>What is life insurance?
Life insurance policies provide beneficiaries with lump-sum payments when the insured party passes away or after a specific period of time has passed. Life insurance provides financial security by replacing lost income and covering expenses.</p>

          <p>Why do I need life insurance?
        There's no replacement for you and the contribution you make to your family. You want to make sure that people in your life, especially your dependents, can remain financially secure after you die.</p>

          <p>That's what life insurance does for you and your loved ones. It gives you peace of mind. Income replacement is the #1 reason why people buy life insurance.

        Stay-at-home moms or dads also have an important, often overlooked, economic value that should be covered by life insurance.</p>

          <p>Life insurance is also used to achieve specific business or estate planning goals.

        Bottom line: life insurance financially protects your family and loved ones at a time when it is needed the most.</p>
        </Col>

        <Col md={{ span: 6 }}>

          < img src={'../assets/img/family_1920.jpg'} />;
        </Col>
      </Container>
      <Footer />
    </>
  )
};

export default LifeIns;
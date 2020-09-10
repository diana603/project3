import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

function LifeIns() {
  return (
    <>
      <Nav />
      <Jumbotron className="myJumbotron" fluid>
        <h1 className="text">Life Insurance</h1>
      </Jumbotron>
      <Container className="inspages">
        <Row>
          <Col md={{ span: 5 }}
            style={{ textAlign: "justify" }}>

            <p>Life insurance is a contract between an insurance policy holder and an insurer or assurer, where the insurer promises to pay a designated beneficiary a sum of money (the benefit) in exchange for a premium, upon the death of an insured person (often the policy holder). Depending on the contract, other events such as terminal illness or critical illness can also trigger payment. The policy holder typically pays a premium, either regularly or as one lump sum. Other expenses, such as funeral expenses, can also be included in the benefits.</p>

            <p>Life policies are legal contracts and the terms of the contract describe the limitations of the insured events. Specific exclusions are often written into the contract to limit the liability of the insurer; common examples are claims relating to suicide, fraud, war, riot, and civil commotion.</p>

            <p style={{ textAlign: "right" }}><cite>Definition by Wikipedia</cite> </p>

          </Col>

          <Col md={{ span: 7 }}>

            < img
              style={{ height: "425px" }}
              src={'../assets/img/family.jpg'} />;
        </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
};

export default LifeIns;
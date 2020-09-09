import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

function Faqs() {
  return (
    <>
      <Nav />
      <Jumbotron className="myJumbotron" fluid>
        <h1 className="text">Frequently Asked Questions</h1>
      </Jumbotron>
      <Container className="inspages">
        <Row>
          <Col md={{ span: 5 }}
            style={{ textAlign: "justify" }}>

            <h2>What is insurance?</h2>
            <p>Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss.</p>

            <p>An entity which provides insurance is known as an insurer, insurance company, insurance carrier or underwriter. A person or entity who buys insurance is known as an insured or as a policyholder. The insurance transaction involves the insured assuming a guaranteed and known relatively small loss in the form of payment to the insurer in exchange for the insurer's promise to compensate the insured in the event of a covered loss. The loss may or may not be financial, but it must be reducible to financial terms, and usually involves something in which the insured has an insurable interest established by ownership, possession, or pre-existing relationship.</p>

            <p>The insured receives a contract, called the insurance policy, which details the conditions and circumstances under which the insurer will compensate the insured. The amount of money charged by the insurer to the policyholder for the coverage set forth in the insurance policy is called the premium. If the insured experiences a loss which is potentially covered by the insurance policy, the insured submits a claim to the insurer for processing by a claims adjuster. The insurer may hedge its own risk by taking out reinsurance, whereby another insurance company agrees to carry some of the risks, especially if the primary insurer deems the risk too large for it to carry.</p>

            <p style={{ textAlign: "right" }} ><cite>Definition by Wikipedia</cite></p>

          </Col>

          <Col md={{ span: 7 }}>

            < img
              style={{ height: "425px" }}
              src={'../assets/img/woman_1920.jpg'} />;
        </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
};

export default Faqs;
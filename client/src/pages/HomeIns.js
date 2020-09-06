import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Jumbotron, Container, Button } from 'react-bootstrap';

function HomeIns() {
  return (
    <>
      <Nav />
      <Container className="inspages">
        <Jumbotron className="myJumbotron" fluid>
          <h1 className="text"> Home Insurance</h1>
        </Jumbotron>

        <p>Buying a house is one of the biggest, if not the biggest investment you make in your life. That's why you need to protect it.</p>
        <p>Home insurance, also commonly called homeowner's insurance (often abbreviated in the US real estate industry as HOI), is a type of property insurance that covers a private residence. It is an insurance policy that combines various personal insurance protections, which can include losses occurring to one's home, its contents, loss of use (additional living expenses), or loss of other personal possessions of the homeowner, as well as liability insurance for accidents that may happen at the home or at the hands of the homeowner within the policy territory.<br />

          Additionally, homeowner's insurance provides financial protection against disasters. A standard home insurance policy insures the home itself along with the things kept inside.</p>
      </Container>
      <Footer />
    </>
  )
};

export default HomeIns;
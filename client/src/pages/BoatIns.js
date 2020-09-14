import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import inspages from './inspages.css';

function BoatIns() {
  return (
    <>
      <Nav/>
      <Jumbotron className="myJumbotron" fluid>
        <h1 className="text">Boat Insurance</h1>
      </Jumbotron>
      <Container className="inspage">
        <Row style={{ display: "inline" }}>
          <img src={'../assets/img/boats_1920.jpg'}
            style={{ height: "450px", float: "left", margin: "0.7em" }}
          />
          <p>
            No matter your preference, your boat needs insurance. You might spend summer afternoons in search of that big bass in your fishing boat, or perhaps you have the perfect pontoon boat for a relaxed cruise around the lake on the weekends. Maybe you even have a sailboat where the wind guides your solitary journey. Whichever your preference, boats are always a big purchase, and if you love the water, you know they’re worth it.
          </p>
          <p>
            When insuring property, there are 2 Basic Types: Actual Cash Value Policies and Agreed Amount Value Policies.
          </p>
          <p>
            Actual Cash Value policies pay for Replacement Costs less depreciation at the time of the loss. In the event of a total loss, used boat pricing guides and other resources are used to determine the approximate market value of your vessel. A partial loss is settled by taking the total cost of the repair less a percentage for depreciation.
          </p>
          <p>
            Agreed Amount Value policies mean you and the insurance company have agreed on the value of your vessel and in the event of a total loss, you will be paid that agreed upon amount. Agreed Amount Value policies also replace old items for new in the event of a partial loss without any deduction for depreciation. Most Agreed Amount Value policies require actual cash value on certain damaged property such as sails, protective covers, batteries, dinghies, trailers and aged outboard motors, lower drive units or outdrives.
          </p>
          <p style={{ textAlign: "right" }}><cite>Definition by Wikipedia</cite></p>
        </Row>
      </Container>
      <Footer/>
    </>
  )
};

export default BoatIns;

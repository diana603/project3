import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col, Jumbotron } from "react-bootstrap";
// import Axios from "axios";
import Carousel from "../components/BootstrapCarousel";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CardHome from "../components/CardHome"


function Home(props) {
  const { isAuth, logout } = useContext(AuthContext);

  const [secret, setSecret] = useState("");

  return (
    <>
      <Nav />
      <Container className="LoginJumbotron" fluid >
        <Jumbotron fluid className="insurancejumbo" style={{ padding: 0 }}>
          <h1 className="insurance"> Welcome to East Coast Insurance </h1>
        </Jumbotron>
        <Container>
          <Carousel />

        </Container>

        <div className="insurancecard">
          <CardHome name="Life" Subtitle="When you want to protect them" link="/LifeIns" />
          <CardHome name="Auto" Subtitle="When you want to protect your car" link="/AutoIns" />
          <CardHome name="Home" Subtitle="When you want to protect your Home" link="/HomeIns" />
          <CardHome name="Customer Forms" Subtitle="Fill the customer forms" link="./Customer" />
          <CardHome name="Insurance" Subtitle="FAQs about Insurance" link="./Faqs" />
        </div>

      </Container >
      <Footer />
    </>
  )
}

export default Home;


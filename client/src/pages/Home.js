import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col, Jumbotron } from "react-bootstrap";
import Axios from "axios";
import Carousel from "../components/BootstrapCarousel";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CardHome from "../components/CardHome"


function Home(props) {
  const { isAuth, logout } = useContext(AuthContext);

  const [secret, setSecret] = useState("");

  // // this function is duplicated in the Members page component
  // // consider refactor 
  // const getSecret = async () => {
  //   const secretResponse = await Axios.get("/api/secrets");
  //   console.log(secretResponse.data);
  //   setSecret(secretResponse.data);
  // };

  return (
    <>
      <Nav />
      <Container className="LoginJumbotron" fluid >
        <Jumbotron fluid className="insurance" style={{ padding: 0 }}>
          <h1 className="insurance"> Welcome to East Coast Life Insurance </h1>
        </Jumbotron>
        <Container className="signup">
          <Carousel />

          <div className="insurancecard">
            <CardHome name="Life" Subtitle="When you want to protect them" link="/LifeIns" />
            <CardHome name="Auto" Subtitle="When you want to protect your car" link="/AutoIns" />
            <CardHome name="Home" Subtitle="When you want to protect your Home" link="/HomeIns" />
            <CardHome name="Customer Forms" Subtitle="Fill the customer forms" link="./Customer" />

          </div>

        </Container>
      </Container >
      <Footer />
    </>
  )
}

export default Home;


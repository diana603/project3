import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col, Jumbotron } from "react-bootstrap";
import Axios from "axios";
import Carousel from "../components/BootstrapCarousel";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


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
    <Container className="LoginJumbotron" fluid >
      <Nav />
      <Jumbotron fluid>cd
        <h1 className="insurance"> Welcome to East Coast Life Insurance </h1>
      </Jumbotron>
      <Container className="signup">
        <Row>
          <Col className="intro" md={{ span: 8, offset: 2 }}>

            <Carousel />

            {isAuth ? (
              <>
                <Button
                  className="m-1"
                  onClick={e => {
                    e.preventDefault();
                    setSecret('');
                    logout();
                  }}
                >
                  Logout
              </Button>
                <Button
                  className="m-1"
                  onClick={e => {
                    e.preventDefault();
                    props.history.push("/profile");
                  }}
                >
                  Members
              </Button>
              </>
            ) : (
                <>
                  <Button
                    className="m-1"
                    onClick={e => {
                      e.preventDefault();
                      props.history.push("/login");
                    }}
                  >
                    Login
              </Button>
                  <Button
                    className="m-1"
                    onClick={e => {
                      e.preventDefault();
                      props.history.push("/signup");
                    }}
                  >
                    Signup
              </Button>
                </>
              )}

          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>{secret}</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  )
}

export default Home;


import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col, Jumbotron } from "react-bootstrap";
import Axios from "axios";
import Footer from "../components/Footer";


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
    <Jumbotron className="LoginJumbotron" fluid >
      <h1 className="insurance"> Welcome to East Coast Life Insurance </h1>
      <Container className="signup">
        <Row>
          <Col className="intro" md={{ span: 8, offset: 2 }}>

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
                    props.history.push("/users/profile");
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
                      props.history.push("/users/login");
                    }}
                  >
                    Login
              </Button>
                  <Button
                    className="m-1"
                    onClick={e => {
                      e.preventDefault();
                      props.history.push("/users/register");
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

    </Jumbotron>
  )
}

export default Home;




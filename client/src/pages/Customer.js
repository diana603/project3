import React from 'react';
import { Jumbotron, Container, Button} from 'react-bootstrap';
import customer from './customer.css';
import FormButton from '../components/FormButton';
import Parallax from "../components/Parallax";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Customer = () => {
    return (
        <>
        <Nav />
        <Jumbotron className="myJumbotron" fluid>
            <Container>
                <h1 className="text">Customer Service Forms</h1>
            </Container>
        </Jumbotron>
        <Parallax />
        <Footer />
        </>
    )
}

export default Customer;

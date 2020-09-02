import React from 'react';
import { Jumbotron, Container, Button} from 'react-bootstrap';
import customer from './customer.css';
import FormButton from '../components/FormButton';
import Parallax from "../components/Parallax";

const Customer = () => {
    return (
        <>
        <Jumbotron className="myJumbotron" fluid>
            <Container>
                <h1 className="text">Customer Service Forms</h1>
            </Container>
        </Jumbotron>
        <Parallax />
        </>
    )
}

export default Customer; 
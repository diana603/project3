import React from 'react';
import { Jumbotron, Container, Button} from 'react-bootstrap';
import customer from './customer.css';
import FormButton from '../components/FormButton'

const Customer = () => {
    return (
        <>
        <Jumbotron className="myJumbotron" fluid>
            <Container>
                <h1 className="text">Customer Service Forms</h1>
            </Container>
        </Jumbotron> 
                <FormButton/>
        </>
    )
}

export default Customer;
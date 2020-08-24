import  React from 'react';
import {states} from "./states";
import {Form, Col, Button, Container} from 'react-bootstrap/'


const BeneficiaryForm = () => { 
    return (
    <Container>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Policy Number </Form.Label>
                <Form.Control type="Policy Number " placeholder="Enter Policy Number" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>First and Last Name </Form.Label>
                <Form.Control type="Name" placeholder="Enter Name" />
                </Form.Group>
            </Form.Row>

                <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
                </Form.Group>

        <Form.Group controlId="formGridAddress2">
         <Form.Label>Address 2</Form.Label>
         <Form.Control placeholder="Apartment, studio, or floor" />
         </Form.Group>

        <Form.Row>
         <Form.Group as={Col} controlId="formGridCity">
         <Form.Label>City</Form.Label>
         <Form.Control />
        </Form.Group>

         <Form.Group as={Col} controlId="formGridState">
         <Form.Label>State</Form.Label>
         <Form.Control as="select" defaultValue="Choose...">
         <option>Select State</option>         
            {states && states.map((state)=> (
                <option>{state}</option>
            ))}
         <option>...</option>
         </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
         <Form.Label>Zip</Form.Label>
         <Form.Control />
        </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
               Submit
        </Button>
     </Form>

     </Container>
    )
}
export default BeneficiaryForm; 

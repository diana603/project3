import  React, {useState} from 'react';
import customer from './customer.css';
import {states} from "./states";
import {Form, Col, Button, Container} from 'react-bootstrap/'

const OwnershipForm = () => { 
    const [state, setState] = useState("");

    const handleStateChange = (e) => {
        console.log(e.target.value)
        setState(e.target.value)
    }

    const verifyform = ()=> {
        if (!state || state === "Select State"){
            alert("Please Enter Address")
        }else if (state === "MA" ){
            alert("Please Note in the State of MA your signature must be witnessed by a disinterested third party")
        }          
    }
    return (
    <Container className="beneForm">
        <div className="introSentence">
            <p> East Coast Life Insurance </p> 
            <p> Change of Ownership Form </p>
        </div> 
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Policy Number(s) </Form.Label>
                <Form.Control type="Policy Number " placeholder="Enter Policy Number" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>First Name </Form.Label>
                <Form.Control type="Name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
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
         <Form.Control as="select" onChange={handleStateChange}defaultValue="Choose...">
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
    )
}
export default OwnershipForm;
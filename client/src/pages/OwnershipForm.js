import React, { useState } from 'react';
import customer from './customer.css';
import { states } from "./states";
import { Form, Col, Button, Container, Accordion, Card, Toast } from 'react-bootstrap/';
import Nav from "../components/Nav";
import axios from "axios";
import { Redirect } from "react-router-dom";


const OwnerShipForm = () => {
    const [policyNumber, setPolicyNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [newOwnersFName, setNewOwnersFName] = useState("");
    const [newOwnersLName, setNewOwnersLName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [relationshipToInsured, setRelationshipToInsured] = useState("");
    const [newOwnersAddress, setNewOwnersAddress] = useState("");
    const [newOwnersAddressTwo, setNewOwnersAddressTwo] = useState("");
    const [newOwnersCity, setNewOwnersCity] = useState("");
    const [newOwnersZip, setNewOwnersZip] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [redirect, setRedirect] = useState(false);


    const handleStateChange = (e) => {
        console.log(e.target.value)
        setState(e.target.value)
    }

    const verifyForm = (event) => {

        event.preventDefault();
        const form = event.currentTarget;
        console.log(form);
        if (!state || state === "Select State") {
            alert("Please Enter Address")
        } else if (state === "MA") {
            alert("Please Note in the State of MA your signature must be witnessed by a disinterested third party")
        }
        else {
            axios.post('/api/OwnerShipFormData', {
                policyNumber: policyNumber,
                firstName: firstName,
                lastName: lastName,
                address: address,
                addressTwo: addressTwo,
                city: city,
                state: state,
                zip: zip,
                newOwnersFName: newOwnersFName,
                newOwnersLName: newOwnersLName,
                dateOfBirth:dateOfBirth,
                relationshipToInsured:relationshipToInsured,
                newOwnersAddress:newOwnersAddress,
                newOwnersAddressTwo:newOwnersAddressTwo,
                newOwnersCity:newOwnersCity,
                newOwnersZip:newOwnersZip

            })
                .then(function (response) {
                    console.log(response);
                }).then(() => {
                    setShowToast(true);
                    setTimeout(() => setRedirect(true)
                        , 5000);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    if (redirect) {
        return <Redirect to="/" />
    }
    else {
        return (
            <>
                <Nav />
                <Container className="OwnerShipForm">
                    <div className="introSentence">
                        <p> East Coast Life Insurance </p>
                        <p> Change of Beneficiary Form </p>
                    </div>
                    <Form onSubmit={event => verifyForm(event)}>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Current Policy Owner Information
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Policy Number(s) </Form.Label>
                                                <Form.Control type="Policy Number " placeholder="Enter Policy Number" onChange={number => setPolicyNumber(number.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>First Name </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Name" onChange={e => setFirstName(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Name" onChange={e => setLastName(e.target.value)} />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="formGridAddress1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control placeholder="Enter Address" onChange={e => setAddress(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group controlId="formGridAddress2">
                                            <Form.Label>Address 2</Form.Label>
                                            <Form.Control placeholder="Enter Address" onChange={e => setAddressTwo(e.target.value)} />
                                        </Form.Group>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control onChange={e => setCity(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control as="select" onChange={handleStateChange} defaultValue="Choose...">
                                                    <option>Select State</option>
                                                    {states && states.map((state) => (
                                                        <option>{state}</option>
                                                    ))}
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control onChange={e => setZip(e.target.value)} />
                                            </Form.Group>
                                        </Form.Row>





                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        New Owner Information</Accordion.Toggle>
                                </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>

                                        <div>
                                            <p>
                                                The undersigned hereby transfers and assigns absolutely, all rights, title and interest in the above policy(ies) to the assignee(s) indicated below and hereby revokes any beneficiary designation or direction of payment previously made in respect to the proceeds payable on the death of the life insured under the above policy(ies) and directs that such proceeds be paid to the assignee(s) and, if more than one, in the same proportion as their ownership rights bear to one another. The assignor(s) warrant the validity of this assignment.
                                            </p>
                                        </div>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>New Owners First Name </Form.Label>
                                                <Form.Control type="Policy Number " placeholder="Enter First Name" onChange={e => setNewOwnersFName(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>New Owners Last Name </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Last Name" onChange={e => setNewOwnersLName(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Date of Birth (MM/DD/YYYY) </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Date of Birth" onChange={e => setDateOfBirth(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Relationship to Insured </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Relationship" onChange={e => setRelationshipToInsured(e.target.value)} />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="formGridAddress1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control placeholder="Enter Address" onChange={e => setNewOwnersAddress(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group controlId="formGridAddress2">
                                            <Form.Label>Address 2</Form.Label>
                                            <Form.Control placeholder="Apartment, studio, or floor" onChange={e => setNewOwnersAddressTwo(e.target.value)} />
                                        </Form.Group>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control onChange={e => setNewOwnersCity(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control as="select" defaultValue="Choose...">
                                                    <option>Select State</option>
                                                    {states && states.map((state) => (
                                                        <option>{state}</option>
                                                    ))}
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control onChange={e => setNewOwnersZip(e.target.value)} />
                                            </Form.Group>
                                        </Form.Row>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        Complete This Section When Ownership is Changing to a Trust.
                                    </Accordion.Toggle>
                                </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Complete this section when ownership is changing to a trust in section 2. The grantor(s) and trustee(s) declare and represent to the Company that the answers provided in this trust certification are accurate and complete and also certify that the trust is:
                                            </p>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Irrevocable" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Revocable" />
                                            </Form.Group>
                                            <p>
                                                The trustee(s) is/are allowed by the terms of the trust to own and administer life insurance and securities; • The trust permits the trustee(s) to exercise all ownership rights provided by any policy issued by the Company to the trust, including, but not limited to, the right to surrender, pledge or encumber the policy or make withdrawals and the trustee(s) is/are permitted to distribute the policy to any beneficiary of the trust or to sell and transfer ownership of the policy pursuant to the sale; • The Company may rely solely on this certification performing obligations of the policy, and neither the Company or anyone acting as an agent of the Company is responsible to determine the authority of the trustee(s) or inquire into, or review the provisions of the trust, and shall not be charged with knowledge of the terms of the trust; and • The Company may rely on the evidence submitted with respect to any change of the trustee(s) and/or the appointment of a successor trustee, and is not responsible to determine that the change or the appointment of any additional or successor trustee(s) conforms with the trust provisions.
                                            </p>
                                        </div>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Name of all current trustee(s) </Form.Label>
                                                <Form.Control type="Enter Name " placeholder="Enter Name" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Name of grantor(s) </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Name" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Relationship of the grantor(s) and all the trustee(s) </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Relationship" />
                                            </Form.Group>
                                        </Form.Row>
                                        <div>
                                            <p>
                                                Trustee authorization All trustee(s) must sign this form. The undersigned trustee(s) further certifies that in accordance with the Trust all documents related to the application for, issuance, delivery, exercise of rights of ownership and administration of the policy issued by the Company to the Trust must be signed by (check one):
                                            </p>
                                        </div>

                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="All Trustees (default)" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Any Trustee" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="A Majority of Trustees" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Any A Designated Trustee" />
                                        </Form.Group>

                                        <Form.Group controlId="Name">
                                            <Form.Label>Name of Designated Trustee</Form.Label>
                                            <Form.Control placeholder="Enter Name" />
                                        </Form.Group>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        Final Authorization
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <div>
                                        <p>
                                            By signing this form, each trustee understands and agrees that the Company shall rely on the above designation of authority to take action with respect to the policy and this designation of authority shall remain in effect until revoked by a written request of the trustee(s) that is accepted and acknowledged by the Company.

                                            Certification required of U.S. persons only (including U.S. citizens, U.S. resident aliens, or other U.S. persons). Under penalties of perjury, I certify that:

                                            1. Th e number shown on this form is my correct Taxpayer Identification Number,
                                            2. I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am no longer subject to backup withholding, and
                                            3. I am a U.S. citizen or other U.S. person, including a U.S. resident alien (as defined in the IRS Form W-9 instructions). Certification instructions You must check the box below if you have been notified by the IRS that you are currently subject to backup withholding because you have failed to report all interest and dividends on your tax return.

                                            Certification instructions

                                            You must check the box below if you have been notified by the IRS that you are currently subject to backup withholding because you have failed to report all interest and dividends on your tax return.
                                        </p>
                                    </div>
                                    <div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="I am subject to backup withholding as a result of a failure to report all interest and dividends." />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <p>
                                            The Internal Revenue Service does not require your consent to any provision of this document other than the certification required to prevent backup withholding.
                                        </p>
                                    </div>

                                    <Card.Body>
                                        <Form.Group controlId="signature">
                                            <Form.Label>Signature Of Current Owner and Date (mmddyyyy) </Form.Label>
                                            <Form.Control placeholder="Sign Here" />
                                        </Form.Group>

                                        <Form.Group controlId="signature">
                                            <Form.Label>Signature of New Owner (mmddyyyy) </Form.Label>
                                            <Form.Control placeholder="Sign Here" />
                                        </Form.Group>

                                        <div>
                                            <p>
                                                Important: In Massachusett s, the owner’s signature must be witnessed by a disinterested person, over the age of 18, who is not being named
                                                as a beneficiary.
                                            </p>
                                        </div>
                                        <Form.Group controlId="signature">
                                            <Form.Label>Signature of Witness and Date(mmddyyyy) </Form.Label>
                                            <Form.Control placeholder="Sign Here" />
                                        </Form.Group>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <div className="beneBtn">
                            <Button type="submit" variant="primary">
                                Submit
                        </Button>
                        </div>
                    </Form>
                    <Toast show={showToast}>
                        <Toast.Header closeButton={false}>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Bootstrap</strong>
                        </Toast.Header>
                        <Toast.Body>Thank You For Your Submission. Your Request will processed Within 10 to 15 business days. </Toast.Body>
                    </Toast>
                </Container>
            </>
        )
    }
}
export default OwnerShipForm; 
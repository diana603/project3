import React, { useState } from 'react';
import customer from './customer.css';
import { states } from "./states";
import { Form, Col, Button, Container, Accordion, Card, Toast } from 'react-bootstrap/';
import Nav from "../components/Nav";
import axios from "axios";
import { Redirect } from "react-router-dom";


const BeneficiaryForm = () => {
    const [policyNumber, setPolicyNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [primaryBeneficiaryFName, setPrimaryBeneficiaryFName] = useState("");
    const [primaryBeneficiaryLName, setPrimaryBeneficiaryLName] = useState("");
    const [PrimaryPercentage, setPrimaryPercentage] = useState("");
    const [PAddress, setPAddress] = useState("");
    const [PAddressTwo, setPAddressTwo] = useState("");
    const [PCity, setPCity] = useState("");
    const [PZip, setPZip] = useState("");
    const [SecondaryBeneficiaryFName, setSecondaryBeneficiaryFName] = useState("");
    const [SecondaryBeneficiaryLName, setSecondaryBeneficiaryLName] = useState("");
    const [SecondaryPercentage, setSecondaryPercentage] = useState("");
    const [SAddress, setSAddress] = useState("");
    const [SAddressTwo, setSAddressTwo] = useState("");
    const [SCity, setSCity] = useState("");
    const [SZip, setSZip] = useState("");
    const [SignatureOfOwner, setSignatureOfOwner] = useState("");
    const [SignatureOfAdditionalOwner, setSignatureOfAdditionalOwner] = useState("");
    const [SignatureOfWitness, setSignatureOfWitness] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleStateChange = (e) => {
        console.log(e.target.value);
        setState(e.target.value);
    }

    const verifyForm = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form);
        if (!state || state === "Select State") {
            alert("Please Enter Address");
        } else if (state === "MA") {
            alert("Please Note in the State of MA your signature must be witnessed by a disinterested third party");
        }
        else {
            axios.post('/api/beneFormData', {
                policyNumber: policyNumber,
                firstName: firstName,
                lastName: lastName,
                address: address,
                addressTwo: addressTwo,
                city: city,
                state: state,
                zip: zip,
                primaryBeneficiaryFName: primaryBeneficiaryFName,
                primaryBeneficiaryLName: primaryBeneficiaryLName,
                PrimaryPercentage: PrimaryPercentage,
                PAddressOne: PAddress,
                PAddressTwo: PAddressTwo,
                PCity: PCity,
                PZip: PZip,
                SecondaryBeneficiaryFName: SecondaryBeneficiaryFName,
                SecondaryBeneficiaryLName: SecondaryBeneficiaryLName,
                SecondaryPercentage: SecondaryPercentage,
                SAddress: SAddress,
                SAddressTwo: SAddressTwo,
                SCity: SCity,
                SZip: SZip,
                SignatureOfOwner: SignatureOfOwner,
                SignatureOfAdditionalOwner: SignatureOfAdditionalOwner,
                SignatureOfWitness: SignatureOfWitness

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
                <Container className="beneForm">
                    <div className="introSentence">
                        <p> East Coast Life Insurance </p>
                        <p> Change of Beneficiary Form </p>
                    </div>
                    <Form onSubmit={event => verifyForm(event)}>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Policy Information
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
                                        Primary Beneficiary</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>

                                        <div>
                                            <p>
                                                Subject to the terms of the policy(ies) and any assignee on record with East Coast Insurance, the undersigned hereby revokes all beneficiary
                                                designations or directions of payment previously made in respect to the proceeds payable on the death of the life insured under the above
                                                policy(ies) and directs that such proceeds be paid to the beneficiary(ies) listed below. To retain any existing beneficiaries currently
                                                on fi le they must be restated below. For example, if you are changing only the secondary beneficiary, you must restate the primary
                                                beneficiary(ies). Please note:
                                                • The insured on the policy cannot be listed as a beneficiary.
                                                • Designations given in dollar amounts or fractions will not be accepted.
                                                • If percentages are not provided below, beneficiaries in the same class (primary/secondary) will share equally in any death benefit
                                                payable to them. If the beneficiaries are unable to be shared equally (e.g., 1/3) we will designate the extra rounded percentile to the
                                                fi rst listed beneficiary in each class (e.g., 33.34%, 33.33%, 33.33%). We will not accept designations to more than two decimal
                                                places (e.g., 33.333% will not be accepted).
                                                To name any of the primary or secondary beneficiary(ies) as irrevocable beneficiaries, write “irrevocable” aft er their name(s).
                                         </p>
                                        </div>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Primary Beneficiary First Name </Form.Label>
                                                <Form.Control type="Policy Number " placeholder="Enter First Name" onChange={e => setPrimaryBeneficiaryFName(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Primary Beneficiary Last Name </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Last Name" onChange={e => setPrimaryBeneficiaryLName(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Percentage of Proceeds </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Percentages" onChange={e => setPrimaryPercentage(e.target.value)} />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="formGridAddress1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control placeholder="1234 Main St" onChange={e => setPAddress(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group controlId="formGridAddress2">
                                            <Form.Label>Address 2</Form.Label>
                                            <Form.Control placeholder="Apartment, studio, or floor" onChange={e => setPAddressTwo(e.target.value)} />
                                        </Form.Group>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control onChange={e => setPCity(e.target.value)} />
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
                                                <Form.Control onChange={e => setPZip(e.target.value)} />
                                            </Form.Group>
                                        </Form.Row>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        Secondary Beneficiary Information
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Secondary Beneficiary(ies). Percentage of proceeds in this designation must equal 100%.
                                            </p>
                                        </div>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>(1)Secondary Beneficiary First Name </Form.Label>
                                                <Form.Control type="Policy Number " placeholder="Enter First Name" onChange={e => setSecondaryBeneficiaryFName(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Secondary Beneficiary Last Name </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Last Name" onChange={e => setSecondaryBeneficiaryLName(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Percentage of Proceeds </Form.Label>
                                                <Form.Control type="Name" placeholder="Enter Percentages" onChange={e => setSecondaryPercentage(e.target.value)} />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="formGridAddress1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control placeholder="1234 Main St" onChange={e => setSAddress(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group controlId="formGridAddress2">
                                            <Form.Label>Address 2</Form.Label>
                                            <Form.Control placeholder="Apartment, studio, or floor" onChange={e => setSAddressTwo(e.target.value)} />
                                        </Form.Group>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control onChange={e => setSCity(e.target.value)} />
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
                                                <Form.Control onChange={e => setSZip(e.target.value)} />
                                            </Form.Group>
                                        </Form.Row>

                                        <div>
                                            <p>
                                                For residents of Arizona, Arkansas, California, Idaho, Louisiana, Nevada, New Mexico, Puerto Rico, Tennessee, Texas,
                                                Washington and Wisconsin:
                                                If you (the owner) live in one of the community property states listed above, and you have named someone other than your spouse as your
                                                beneficiary, your spouse may have rights to the death benefit of this policy under state law, even if you choose not to name them as your
                                                beneficiary. Please have your spouse sign below to waive his or her rights to any community property interest in the death benefit.
                                                If you are unsure of whether these laws apply to you, consult with your legal or tax professional to determine whether a spousal signature is
                                                required on this form. East Coast Insurance disclaims any responsibility for determining the applicability of community property laws or the validity of
                                                the requested beneficiary change.
                                                Note: Use of the term “spouse” on this form refers to the person to whom the owner is legally married, or the policy owner’s domestic partner
                                                or equivalent as recognized and allowed by federal law, or by state law in your state of residence.
                                                Spousal Consent:
                                                I, (print full legal name) , am aware that the owner, named above, has named someone
                                                other than me to be the beneficiary of this life insurance policy and do hereby consent to the beneficiary designation(s) indicated on this form
                                                and waive any rights that I may have to the death benefit proceeds of such policy under applicable community property laws.
                                            </p>
                                        </div>
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
                                    <Card.Body>
                                        <Form.Group controlId="signature">
                                            <Form.Label>Signature Of Owner and Date (mmddyyyy) </Form.Label>
                                            <Form.Control placeholder="Sign Here" onChange={e => setSignatureOfOwner(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group controlId="signature">
                                            <Form.Label>Signature of Additional Owner or Irrevocable Beneficiary (if applicable) and Date(mmddyyyy) </Form.Label>
                                            <Form.Control placeholder="Sign Here" onChange={e => setSignatureOfAdditionalOwner(e.target.value)} />
                                        </Form.Group>

                                        <div>
                                            <p>
                                                Important: In Massachusett s, the owner’s signature must be witnessed by a disinterested person, over the age of 18, who is not being named
                                                as a beneficiary.
                                            </p>
                                        </div>
                                        <Form.Group controlId="signature">
                                            <Form.Label>Signature of Witness and Date(mmddyyyy) </Form.Label>
                                            <Form.Control placeholder="Sign Here" onChange={e => setSignatureOfWitness(e.target.value)} />
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
export default BeneficiaryForm; 
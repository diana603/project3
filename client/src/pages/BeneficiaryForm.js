import  React, {useState} from 'react';
import customer from './customer.css';
import {states} from "./states";
import {Form, Col, Button, Container} from 'react-bootstrap/'

const BeneficiaryForm = () => { 
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
            <p> Change of Beneficiary Form </p>
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

        <div>
            <p>
Subject to the terms of the policy(ies) and any assignee on record with John Hancock, the undersigned hereby revokes all beneficiary
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
                <Form.Label>(1)Primary Beneficiary First Name </Form.Label>
                <Form.Control type="Policy Number " placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Primary Beneficiary Last Name </Form.Label>
                <Form.Control type="Name" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Percentage of Proceeds </Form.Label>
                <Form.Control type="Name" placeholder="Enter Percentages" />
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
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>(2)Primary Beneficiary First Name </Form.Label>
                <Form.Control type="Policy Number " placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Primary Beneficiary Last Name </Form.Label>
                <Form.Control type="Name" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Percentage of Proceeds </Form.Label>
                <Form.Control type="Name" placeholder="Enter Percentages" />
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

        <div>
            <p>
            Secondary Beneficiary(ies). Percentage of proceeds in this designation must equal 100%.                                        
            </p>
        </div>

        <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>(1)Secondary Beneficiary First Name </Form.Label>
                <Form.Control type="Policy Number " placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Secondary Beneficiary Last Name </Form.Label>
                <Form.Control type="Name" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Percentage of Proceeds </Form.Label>
                <Form.Control type="Name" placeholder="Enter Percentages" />
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
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>(2)Secondary Beneficiary First Name </Form.Label>
                <Form.Control type="Policy Number " placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Secondary Beneficiary Last Name </Form.Label>
                <Form.Control type="Name" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Percentage of Proceeds </Form.Label>
                <Form.Control type="Name" placeholder="Enter Percentages" />
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

        <div>
            <p>
            For residents of Arizona, Arkansas, California, Idaho, Louisiana, Nevada, New Mexico, Puerto Rico, Tennessee, Texas,
Washington and Wisconsin:
If you (the owner) live in one of the community property states listed above, and you have named someone other than your spouse as your
beneficiary, your spouse may have rights to the death benefit of this policy under state law, even if you choose not to name them as your
beneficiary. Please have your spouse sign below to waive his or her rights to any community property interest in the death benefit.
If you are unsure of whether these laws apply to you, consult with your legal or tax professional to determine whether a spousal signature is
required on this form. John Hancock disclaims any responsibility for determining the applicability of community property laws or the validity of
the requested beneficiary change.
Note: Use of the term “spouse” on this form refers to the person to whom the owner is legally married, or the policy owner’s domestic partner
or equivalent as recognized and allowed by federal law, or by state law in your state of residence.
Spousal Consent:
I, (print full legal name) , am aware that the owner, named above, has named someone
other than me to be the beneficiary of this life insurance policy and do hereby consent to the beneficiary designation(s) indicated on this form
and waive any rights that I may have to the death benefit proceeds of such policy under applicable community property laws. 
            </p>
        </div>
        <Form.Group controlId="formGridAddress1">
                <Form.Label>Signature Of Owner and Date (mmddyyyy) </Form.Label>
                <Form.Control placeholder="Sign Here" />
                </Form.Group>
        
        <Form.Group controlId="formGridAddress1">
                <Form.Label>Signature of Additional Owner or Irrevocable Beneficiary (if applicable) and Date(mmddyyyy) </Form.Label>
                <Form.Control placeholder="Sign Here" />
                </Form.Group>  

        <div>
            <p>
            Important: In Massachusett s, the owner’s signature must be witnessed by a disinterested person, over the age of 18, who is not being named
            as a beneficiary.
            </p>
        </div>

        <Form.Group controlId="formGridAddress1">
                <Form.Label>Signature of Witness and Date(mmddyyyy) </Form.Label>
                <Form.Control placeholder="Sign Here" />
                </Form.Group>
 
        <div className="beneBtn">
            <Button className="gobackBtn" variant="primary">
               Go Back
            </Button >
            <Button onClick={verifyform} variant="primary">
               Next
            </Button>
        </div>
     </Form>
     </Container>
    )
}
export default BeneficiaryForm; 

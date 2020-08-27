import React from 'react';
import customer from '../pages/customer.css';
import {Button} from 'react-bootstrap';


const formButton = () => {
    return (
    <div>
         <h2>Please Select From The Following Forms </h2>
        <div className="formbtn">
            <Button variant="primary" size="lg">
               Change of Beneficiary
            </Button>
            <Button variant="primary" size="lg">
                  Change of Ownership 
            </Button> 
            <Button variant="primary" size="lg">
                  W9 Form 
            </Button>
        </div>
    </div> 
    )
}

export default formButton; 

// react router for front end, make call to back end to verify. and once verfied okay to display customer page
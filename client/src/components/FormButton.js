import React from 'react';
import {Button} from 'react-bootstrap';


const formButton = () => {
    return (
        <div className="mb-2">
            <h2>Please Select From The Following Forms </h2>
            <Button variant="primary" size="lg">
               Change of Beneficiary
            </Button>{' '}
            <Button variant="primary" size="lg">
                  Change of Ownership 
            </Button> {' '}
            <Button variant="primary" size="lg">
                  W9 Form 
            </Button>
        </div>
    )
}

export default formButton;
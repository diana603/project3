import React, { useState } from 'react';
import customer from '../pages/customer.css';
import {Button} from 'react-bootstrap';
import Modal from "./Modal";

const FormButton = props => {
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)

    return (
    <div>
         <h2>Please Select From The Following Forms </h2>
        <div className="formbtn">
            <Button onClick={handleShow} variant="primary" size="lg" className="BForm">
               Change of Beneficiary
            </Button>
            <Button  onClick={handleShow}  variant="primary" size="lg" className="OForm">
                  Change of Ownership 
            </Button> 
            <Button  onClick={handleShow} variant="primary" size="lg" className="WForm">
                  W9 Form 
            </Button>
        </div>
        <Modal show={show} handleHide={handleHide}/>
    </div> 
    )
}

export default FormButton;
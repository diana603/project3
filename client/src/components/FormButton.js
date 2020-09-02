import React, { useState } from 'react';
import customer from '../pages/customer.css';
import {Button} from 'react-bootstrap';
import Modal from "./Modal";
import {Link} from "react-router-dom";

const FormButton = props => {
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [nextButton, setNextButton] = useState("");
    const [formLink, setFormLink] = useState("");

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
    const showBeneficiaryForm = () => {
        setModalInfo("Here you can complete a Beneficiary Form. Press next to continue.")
        setModalTitle("Beneficiary Form")
        setNextButton("Next")
        // setFormLink("../BeneficiaryForm")
        setShow(true)
    };
    const showChangeForm = () => {
        setModalTitle("Change of Ownership")
        setModalInfo("Here you can complete a form for Change of Ownership.")
        setNextButton("Next")
        setShow(true)
    };
    const showWForm = () => {
        setModalTitle("W9 Form")
        setModalInfo("Here you can complete a W9 Form.")
        setNextButton("Next")
        setShow(true)
    };


    return (
    <div className="formBody">
         <h2>Please Select The Form You Would Like to Complete</h2>
         <h3>Tip: For details on each form, hover over the button.</h3>
        <div className="formbtn">
            <Link to="/BeneficiaryForm">
            <Button onMouseEnter={showBeneficiaryForm} variant="primary" size="lg" className="BForm">
               Change of Beneficiary
            </Button>
            </Link>
            <Button  onMouseEnter={showChangeForm}  variant="primary" size="lg" className="OForm">
                  Change of Ownership 
            </Button> 
            <Button  onMouseEnter={showWForm} variant="primary" size="lg" className="WForm">
                  W9 Form 
            </Button> 
        </div>
        <Modal show={show} handleHide={handleHide} modalTitle={modalTitle} modalInfo={modalInfo} nextButton={nextButton} formLink={formLink}/>
    </div> 
    )
}

export default FormButton;

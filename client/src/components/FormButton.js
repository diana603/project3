import React, { useState } from 'react';
import customer from '../pages/customer.css';
import { Button } from 'react-bootstrap';
import Modal from "./Modal";
import { Link } from "react-router-dom";

const FormButton = props => {
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [nextButton, setNextButton] = useState("");
    const [formLink, setFormLink] = useState("");

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
    const showBeneficiaryForm = () => {
        setModalInfo(`East Coast Insurance believes strongly in protecting the privacy and confidentiality of Internet users who visit this website (“site”). This Privacy Notice explains the way which this site collects personal information, how we may use this information, and the ways in which we protect it. Generally, personal information is information that can be used to identify you or your activities on this site or through services offered on this site.\nThis Privacy Notice applies solely to data collected via the site; there may be additional personal (and other) information we have or collect about you pursuant to other relationships.\n

                What Data Do We Collect?
        "Personal information" is information that identifies you as an individual or relates to an identifiable individual. The type of personal information we may collect may relate to the performance of this site and, when applicable, the product or service being offered to you.

        Generally, we may collect the following types of personal information about you and, if required for the services provided, about your dependents or beneficiaries:

        Individual Contact and Demographic Information (including Family Members)
        Name, address, email address, telephone number, gender, marital status, date and place of birth, employer, job title and employment history, and/or your relationship to the policyholder, insured, beneficiary or claimant.

        Identification details
        Identification numbers issued by government bodies or agencies (e.g. depending on the country where you reside, this may include your social security or national insurance number, passport number, ID number, tax identification number, or driver’s license number).
         
        Financial information
        Payment card number, bank account number and account details, income and other financial information.
         
        Insurable Risk Information
        The information necessary to secure insurance products, provide risk consulting services, and/or offer guidance on other financial products and services to you. 
        
        Press next to continue if you agree to the Privacy Policy.`)
        setModalTitle("Beneficiary Form - Privacy Notice")
        setNextButton("Next")
        setFormLink("/BeneficiaryForm")
        setShow(true)
    };
    const showChangeForm = () => {
        setModalTitle("Change of Ownership - Privacy Notice")
        setModalInfo(`East Coast Insurance believes strongly in protecting the privacy and confidentiality of Internet users who visit this website (“site”). This Privacy Notice explains the way which this site collects personal information, how we may use this information, and the ways in which we protect it. Generally, personal information is information that can be used to identify you or your activities on this site or through services offered on this site.
        This Privacy Notice applies solely to data collected via the site; there may be additional personal (and other) information we have or collect about you pursuant to other relationships.
        What Data Do We Collect?
        "Personal information" is information that identifies you as an individual or relates to an identifiable individual. The type of personal information we may collect may relate to the performance of this site and, when applicable, the product or service being offered to you.Generally, we may collect the following types of personal information about you and, if required for the services provided, about your dependents or beneficiaries:
        Individual Contact and Demographic Information (including Family Members)
        Name, address, email address, telephone number, gender, marital status, date and place of birth, employer, job title and employment history, and/or your relationship to the policyholder, insured, beneficiary or claimant.
        Identification details
        Identification numbers issued by government bodies or agencies (e.g. depending on the country where you reside, this may include your social security or national insurance number, passport number, ID number, tax identification number, or driver’s license number).Financial information
        Payment card number, bank account number and account details, income and other financial information.
        Insurable Risk Information
        The information necessary to secure insurance products, provide risk consulting services, and/or offer guidance on other financial products and services to you.
        Press next to continue if you agree to the Privacy Policy.`)
        setNextButton("Next")
        setFormLink("/OwnershipForm")
        setShow(true)
    };
    // const showWForm = () => {
    //     setModalTitle("W9 Form")
    //     setModalInfo("Here you can complete a W9 Form.")
    //     setNextButton("Next")
    //     setFormLink("/")
    //     setShow(true)
    // };

    return (
        <div className="formBody">
            <h2>Please Select The Form You Would Like to Complete</h2>
            <h3>Tip: For details on each form, hover over the corresponding button.</h3>
            <div className="formbtn">
                <Link to="/BeneficiaryForm">
                    <Button onMouseEnter={showBeneficiaryForm} variant="primary" size="lg" className="BForm">
                        Change of Beneficiary
                </Button>
                </Link>
                <Button onMouseEnter={showChangeForm} variant="primary" size="lg" className="OForm">
                    Change of Ownership
            </Button>
            </div>
            <Modal show={show} handleHide={handleHide} modalTitle={modalTitle} modalInfo={modalInfo} nextButton={nextButton} formLink={formLink} />
        </div>
    )
}

export default FormButton;

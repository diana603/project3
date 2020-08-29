import React, { useState } from "react";

import {Button, Modal} from "react-bootstrap";
import {render} from 'react-dom';
import {Link} from "react-router-dom";


 function ModalView(props) {
    
    const { show, handleHide, modalInfo, modalTitle, nextButton } = props;

    return (
      <>
        <Modal
          size="lg"
          show={show}
          onHide={handleHide}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalInfo}</Modal.Body>
          <Link to="/BeneficiaryForm">
            <Button>{nextButton}</Button>
          </Link>
          {/* <Link to="/BeneficiaryForm">
            <Button onClick={show} variant="primary" size="lg">
               Change of Beneficiary
            </Button>
            </Link> */}
      </Modal>


    </>
  );
}

//  render(<Example />);

export default ModalView;




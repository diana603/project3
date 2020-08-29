import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import {render} from 'react-dom';
import modal from "../pages/assets/modal.css";


 function ModalView(props) {
    
    const { show, handleHide } = props;

  
    return (
      <>
        <Modal
          size="lg"
          show={show}
          onHide={handleHide}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Benef Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Info on B.</Modal.Body>
        </Modal>
      </>
    );
  }
  
//  render(<Example />);

  export default ModalView;



  
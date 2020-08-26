import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import {render} from 'react-dom';

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
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </>
    );
  }
  
//  render(<Example />);

  export default ModalView;



  
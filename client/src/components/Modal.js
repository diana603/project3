import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import {render} from 'react-dom';
import {Link} from "react-router-dom";
import ModalStyle from "../pages/assets/modal.css";

function ModalView(props) {
  const { show, handleHide, modalInfo, modalTitle, nextButton, formLink } = props;

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
        <Link to ={formLink}>
          <Button className="MButton">
            {nextButton}
          </Button>
        </Link>
      </Modal>
    </>
  );
}

export default ModalView;

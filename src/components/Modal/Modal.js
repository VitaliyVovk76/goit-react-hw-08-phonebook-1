import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import ContatcForm from "../ContactForm";
import styles from "./Modal.module.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      className={styles.modal}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContatcForm onHide={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}

function ModalContatcForm() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className={styles.buttonAddContact}
        variant="success"
        onClick={() => setModalShow(true)}
      >
        Add Contact
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalContatcForm;

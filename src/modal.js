import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function ModalTab() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <AwesomeButton
        className="outline-primary ms-auto mt-2"
        style={{ height: "35px" }}
        onPress={handleShow}
      >
        Шинэ
      </AwesomeButton>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Нэр</Form.Label>
            <Form.Control type="text" placeholder="Ангиллын нэр" autoFocus />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger me-auto" onClick={handleClose}>
            Устгах
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTab;

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { UploadImage } from "./uploadImage";
import Button from "react-bootstrap/Button";

export function AddPost() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex mb-4">
        <h1>Мэдээ</h1>
        <AwesomeButton
          style={{ marginLeft: "340px" }}
          type="primary"
          className="mt-2"
          onPress={handleShow}
        >
          Нэмэх
        </AwesomeButton>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>{<UploadImage />}</Modal.Body>
        <Modal.Footer className="border-top-0">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

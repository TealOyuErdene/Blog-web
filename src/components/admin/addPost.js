import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function AddPost() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="d-flex mb-4">
        <h1>Мэдээ</h1>
        <AwesomeButton
          style={{ marginLeft: "340px" }}
          type="primary"
          className="mt-2"
          onPress={() => setLgShow(true)}
        >
          Нэмэх
        </AwesomeButton>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
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

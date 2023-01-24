import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export function AddPost() {
  const [lgShow, setLgShow] = useState(false);
  const [image, setImage] = useState();
  function handleImage(e) {
    let value = e.target.value;
    console.log(value);

    // const files = e.target.files[0].name;
    setImage(value);
    // console.log(image);
  }

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
        <div style={{ margin: "50px" }}>
          <img src={image} />
        </div>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Мэдээ нэмэх
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            controlId="formFile"
            className="mb-3"
            encType="multipart/form-data"
          >
            <Form.Label>Зургаа оруулах хэсэг</Form.Label>
            <Form.Control type="file" onChange={handleImage} />
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
}

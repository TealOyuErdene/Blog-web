import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { toast } from "react-toastify";

export function TodoNew({ onSave }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [text, setText] = useState("");
  let [error, setError] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSave() {
    if (text === "") {
      setError("Утга бичнэ үү.");
    } else {
      onSave(text);
      setText("");
      setError("");
      setShow(false);
      toast.success("Амжилттай нэмэгдлээ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  function handleKeyUp(e) {
    if (e.code === "Enter") {
      handleSave();
    }
  }

  return (
    <>
      <div className="d-flex mb-4">
        <h1>Ангилал</h1>
        <AwesomeButton
          style={{ marginLeft: "340px" }}
          className="outline-primary  mt-2"
          onPress={handleShow}
        >
          Шинэ
        </AwesomeButton>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Нэр</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ангиллын нэр"
              autoFocus
              value={text}
              onChange={handleTextChange}
              onKeyUp={handleKeyUp}
              style={{ borderColor: error ? "red" : "none" }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger me-auto" onClick={handleClose}>
            Устгах
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
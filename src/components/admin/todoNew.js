import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

export function TodoNew({ onSave, loadCategory }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [text, setText] = useState("");
  let [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleKeyUp(e) {
    if (e.code === "Enter") {
      handleSave();
    }
  }

  function handleSave() {
    if (text === "") {
      setError("Утга бичнэ үү.");
    } else {
      setLoading(true);
      axios
        .post("http://localhost:8000/categories", {
          name: text,
        })
        .then((res) => {
          const { status } = res;
          if (status === 201) {
            loadCategory();
            handleClose();
            setLoading(false);
            setText("");
            setError("");
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
        });
    }
  }

  return (
    <>
      <div className="d-flex mb-4">
        <h1>Ангилал</h1>
        <AwesomeButton
          style={{ marginLeft: "340px" }}
          className="mt-2"
          type="primary"
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
              disabled={loading}
              onChange={(e) => setText(e.target.value)}
              onKeyUp={handleKeyUp}
              style={{ borderColor: error ? "red" : "none" }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {loading ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : (
            <>
              <Button
                variant="outline-danger me-auto"
                disabled={loading}
                onClick={handleClose}
              >
                Устгах
              </Button>
              <Button
                variant="primary"
                loading
                disabled={loading}
                onClick={handleSave}
              >
                Хадгалах
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

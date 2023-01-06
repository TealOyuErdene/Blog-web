import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function ModalTab() {
  let [text, setText] = useState("");
  let [todos, setTodos] = useState([]);

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function addTodo() {
    const newTodos = [text, ...todos];
    setTodos(newTodos);
    setText("");
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="col-lg-5 mx-auto mt-5">
          <div className="d-flex mb-4">
            <h1>Ангилал</h1>
            <AwesomeButton
              className="outline-primary ms-auto mt-2"
              onPress={handleShow}
            >
              Шинэ
            </AwesomeButton>
          </div>

          <ul style={{ paddingLeft: "0px" }}>
            {todos.map((todo, index) => {
              return (
                <Card className="mb-4 d-flex flex-row" key={index}>
                  <Card.Body>{todo}</Card.Body>
                  <Button
                    variant="outline-secondary mt-2 me-2 border-0"
                    style={{ height: "35px" }}
                  >
                    Засах
                  </Button>
                </Card>
              );
            })}
          </ul>
        </div>
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
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger me-auto">Устгах</Button>
          <Button variant="primary" onClick={addTodo}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTab;

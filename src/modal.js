import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function ModalTab() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [text, setText] = useState("");
  let [todos, setTodos] = useState([]);
  let[error, setError] = useState("")

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function addTodo() {
    if(text === ""){
      setError('Утга бичнэ үү.')
    }else{
      const newTodos = [text, ...todos];
      setTodos(newTodos);
      setText("");
      setError("")
      setShow(false)
    }
  }

  function handleDelete(bairlal){
    if(window.confirm('Устгах уу')){
      const newTodos =[...todos]
      newTodos.splice(bairlal, 1)
      setTodos(newTodos)
    }
  }

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
            {todos.map((todo, index1) => {
              return (
                <Card className="mb-4 d-flex flex-row" key={index1}>
                  <input type="checkbox" style={{marginLeft: '10px'}}/>
                  <Card.Body style={{textDecoration: 'line-through', fontSize: '20px'}}>{todo}</Card.Body>
                  <Button
                    variant="outline-secondary mt-2 me-2 border-0"
                    style={{ height: "35px" }}
                    onClick={() => handleDelete(index1)}
                  >
                    Устгах
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
              style={{borderColor: error ? 'red': 'black'}}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger me-auto" onClick={handleClose}>Устгах</Button>
          <Button variant="primary" onClick={addTodo}>Хадгалах</Button>
          {error && <div style={{color: "red"}}>Aldaa: {error}</div>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTab;

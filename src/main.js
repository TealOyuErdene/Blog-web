import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { v4 as uuidv4 } from "uuid";
import InputGroup from "react-bootstrap/InputGroup";

function Main() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [text, setText] = useState("");
  let [todos, setTodos] = useState([]);
  let [error, setError] = useState("");
  let [editingTexts, setEditingTexts] = useState({});

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function addTodo() {
    if (text === "") {
      setError("Утга бичнэ үү.");
    } else {
      let newTodo = {
        text: text,
        done: false,
        id: uuidv4(),
      };
      let newTodos = [newTodo, ...todos];
      setTodos(newTodos);
      setText("");
      setError("");
      setShow(false);
    }
  }

  function handleDelete(bairlal) {
    if (window.confirm("Устгах уу")) {
      let newTodos = [...todos];
      newTodos.splice(bairlal, 1);
      setTodos(newTodos);
    }
  }

  function handleDoneChange(id) {
    let newTodos = [...todos];

    let index;
    for (let i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        index = i;
        break;
      }
    }
    newTodos[index].done = !newTodos[index].done; //e.target.checked
    setTodos(newTodos);
  }
  // const index = newTodos.findIndex((todo) => todo.id === id);

  //editing 1
  function editTodoPrompt(id) {
    let newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    const editedText = prompt("Засна уу", todos[index].text);

    if (editedText === "") {
      let utga = editedText;
      while (utga === "") {
        utga = prompt("Утга оруул");
      }
    } else {
      newTodos[index].text = editedText;
    }
    setTodos(newTodos);
  }

  //editing 3
  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index].text;
    setEditingTexts(newEditingTexts);
  }

  function handleEditingText(id, e) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = e.target.value;
    setEditingTexts(newEditingTexts);
  }

  function cancelEditingText(id) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = undefined;
    setEditingTexts(newEditingTexts);
  }

  function updateEditingText(index, id) {
    const newTodos = [...todos];
    newTodos[index].text = editingTexts[id];
    setTodos(newTodos);
    cancelEditingText(id);
  }

  function handleKeyUp(e) {
    if (e.code === "Enter") {
      addTodo();
    }
  }

  return (
    <>
      <div className="container">
        <div className="col-lg-6 mx-auto mt-5">
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

          <ul style={{ paddingLeft: "0px" }}>
            {todos.map((todo, index1) => {
              return (
                <div key={todo.id}>
                  {editingTexts[todo.id] !== undefined ? (
                    <Card
                      className="d-flex flex-row gap-3 mb-4"
                      style={{ border: "none", width: "610px", height: "64px" }}
                    >
                      <InputGroup size="lg">
                        <Form.Control
                          aria-describedby="inputGroup-sizing-sm"
                          onChange={(e) => handleEditingText(todo.id, e)}
                          onKeyUp={handleKeyUp}
                        />
                      </InputGroup>
                      <Button
                        variant="outline-secondary mt-2 me-2 border-0"
                        style={{ height: "35px" }}
                        onClick={() => cancelEditingText(todo.id)}
                      >
                        Болих
                      </Button>

                      <Button
                        variant="outline-secondary mt-2 me-2 border-0"
                        style={{ height: "35px" }}
                        onClick={() => updateEditingText(index1, todo.id)}
                      >
                        Хадгалах
                      </Button>
                    </Card>
                  ) : (
                    <div className="d-flex">
                      <Card
                        className="mb-4 d-flex flex-row col-lg-6 "
                        style={{ width: "400px" }}
                      >
                        <input
                          type="checkbox"
                          onChange={() => handleDoneChange(todo.id)}
                          style={{ marginLeft: "10px" }}
                        />
                        <Card.Body
                          style={{
                            textDecoration: todo.done ? "line-through" : "none",
                            fontSize: "20px",
                          }}
                        >
                          {todo.text}
                        </Card.Body>
                      </Card>
                      {!todo.done && (
                        // <Button
                        //   variant="outline-secondary mt-2 me-2 border-0"
                        //   style={{ height: "35px" }}
                        //   onClick={() => editTodoPrompt(todo.id)}
                        // >
                        //   Засах
                        // </Button>
                        <Button
                          variant="outline-secondary mt-2 mx-3 border-0"
                          style={{ height: "35px" }}
                          onClick={() => editTodoInline(todo.id, index1)}
                        >
                          Засах
                        </Button>
                      )}
                      <Button
                        variant="outline-secondary mt-2 me-2 border-0"
                        style={{ height: "35px" }}
                        onClick={() => handleDelete(index1)}
                      >
                        Устгах
                      </Button>
                    </div>
                  )}
                </div>
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
              style={{ borderColor: error ? "red" : "black" }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger me-auto" onClick={handleClose}>
            Устгах
          </Button>
          <Button variant="primary" onClick={addTodo}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Main;

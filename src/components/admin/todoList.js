import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export function TodoList({
  editingTexts,
  cancelEditingText,
  updateEditingText,
  handleDoneChange,
  editTodoInline,
  handleEditingText,
  error,
  list,
  loadCategory,
  editingId,
  onEdit,
}) {
  function handleDelete(id) {
    if (window.confirm("Устгах уу")) {
      axios.delete(`http://localhost:8000/categories/${id}`).then((res) => {
        const { status } = res;
        if (status === 200) {
          loadCategory();
        }
      });
    }
  }

  return (
    <>
      <ul style={{ paddingLeft: "0px" }}>
        {list.map((todo, index1) => {
          return (
            <div key={todo.id}>
              {editingTexts[todo.id] !== undefined ? (
                <>
                  <EditingItem
                    handleEditingText={handleEditingText}
                    cancelEditingText={cancelEditingText}
                    updateEditingText={updateEditingText}
                    todo={todo}
                    index1={index1}
                    error={error}
                    editingTexts={editingTexts}
                  />
                </>
              ) : (
                <div className="d-flex">
                  <NormalItem
                    handleDelete={handleDelete}
                    handleDoneChange={handleDoneChange}
                    editTodoInline={editTodoInline}
                    todo={todo}
                    onEdit={onEdit}
                  />
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </>
  );
}

function NormalItem({ handleDoneChange, handleDelete, todo, onEdit }) {
  return (
    <>
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
          {todo.name}
        </Card.Body>
      </Card>
      {!todo.done && (
        <Button
          variant="outline-secondary mt-2 mx-3 border-0"
          style={{ height: "35px" }}
          // onClick={() => editTodoInline(todo.id, index1)}
          onClick={() => onEdit(todo.id)}
        >
          Засах
        </Button>
      )}
      <Button
        variant="outline-secondary mt-2 me-2 border-0"
        style={{ height: "35px" }}
        onClick={() => handleDelete(todo.id)}
      >
        Устгах
      </Button>
    </>
  );
}

function EditingItem({
  handleEditingText,
  cancelEditingText,
  updateEditingText,
  todo,
  index1,
  error,
  editingTexts,
}) {
  return (
    <>
      <Card
        key={todo.id}
        className="d-flex flex-row gap-3 mb-4"
        style={{ border: "none", width: "610px", height: "64px" }}
      >
        <InputGroup size="lg">
          <Form.Control
            aria-describedby="inputGroup-sizing-sm"
            value={editingTexts[todo.id]}
            onChange={(e) => handleEditingText(todo.id, e)}
            style={{ borderColor: error ? "red" : "none" }}
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
    </>
  );
}

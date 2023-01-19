import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoNew } from "./todoNew";
import { TodoList } from "./todoList";
import { toast } from "react-toastify";

function MainTodo() {
  let [todos, setTodos] = useState([]);
  let [editingTexts, setEditingTexts] = useState({});
  let [error, setError] = useState("");

  function handleSave(text) {
    let newTodo = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    let newTodos = [newTodo, ...todos];
    setTodos(newTodos);
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
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index].text;
    setEditingTexts(newEditingTexts);
    setError("");
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
    if (editingTexts[id] === "") {
      setError("Aldaa");
    } else {
      newTodos[index].text = editingTexts[id];
      setTodos(newTodos);
      cancelEditingText(id);
      toast.success("Амжилттай засагдлаа", {
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

  return (
    <>
      <div className="container">
        <div className="col-lg-6 mx-auto mt-5">
          <TodoNew onSave={handleSave} />

          <TodoList
            error={error}
            todos={todos}
            editingTexts={editingTexts}
            cancelEditingText={cancelEditingText}
            updateEditingText={updateEditingText}
            handleDoneChange={handleDoneChange}
            editTodoInline={editTodoInline}
            handleDelete={handleDelete}
            handleEditingText={handleEditingText}
          />
        </div>
      </div>
    </>
  );
}

export default MainTodo;

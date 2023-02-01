import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoNew } from "./todoNew";
import { TodoList } from "./todoList";
import { toast } from "react-toastify";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";

function MainTodo() {
  const [todos, setTodos] = useState([]);
  const [editingTexts, setEditingTexts] = useState({});
  const [error, setError] = useState("");
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const editing = searchParams.get("editing");
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 1000);

  const [show, setShow] = useState(searchParams.get("editing") === "new");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onCreate() {
    setSearchParams({ editing: "new" });
    handleShow();
  }

  function onEdit(id) {
    setSearchParams({ editing: id });
    handleShow();
  }

  function onClose() {
    setSearchParams({});
    handleClose();
  }

  function loadCategory(query = "") {
    axios.get(`http://localhost:8000/categories?q=${query}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setList(data);
      } else {
        alert(`Error: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadCategory(searchedQuery);
  }, [searchedQuery]);

  useEffect(() => {
    loadCategory();
  }, []);

  function handleSave(text) {
    let newTodo = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    let newTodos = [newTodo, ...todos];
    // setTodos(newTodos);
    setList(newTodos);
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
    // setTodos(newTodos);
    setList(newTodos);
  }

  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index].text;
    setEditingTexts(newEditingTexts);
    setError("");

    //zasah heseg
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
      <div className="container" style={{ maxWidth: "580px" }}>
        <TodoNew
          onSave={handleSave}
          loadCategory={loadCategory}
          editingId={editing}
          onClose={onClose}
          onShow={onCreate}
          show={show}
          query={query}
          setQuery={setQuery}
          list={list}
        />

        <TodoList
          error={error}
          todos={todos}
          editingTexts={editingTexts}
          cancelEditingText={cancelEditingText}
          updateEditingText={updateEditingText}
          handleDoneChange={handleDoneChange}
          editTodoInline={editTodoInline}
          handleEditingText={handleEditingText}
          loadCategory={loadCategory}
          list={list}
          editingId={editing}
          onEdit={onEdit}
        />
      </div>
    </>
  );
}

export default MainTodo;

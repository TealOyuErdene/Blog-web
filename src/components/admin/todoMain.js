import React, { useState, useEffect } from "react";
import { TodoNew } from "./todoNew";
import { TodoList } from "./todoList";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";

function MainTodo() {
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

  return (
    <>
      <div className="container" style={{ maxWidth: "580px" }}>
        <TodoNew
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

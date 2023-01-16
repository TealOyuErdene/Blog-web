import NavbarItem from "../navbar";
import Main from "../todoMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoNew } from "../todoNew";
import { TodoList } from "../todoList";
export function AdminApp() {
  return (
    <>
      <NavbarItem />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>welcome to admin page</h1>}></Route>
          <Route path="/todonew" element={<TodoNew />}></Route>
          <Route path="/todolist" element={<TodoList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

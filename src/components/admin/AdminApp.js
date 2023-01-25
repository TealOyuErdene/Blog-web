import NavbarItem from "./navbar";
import { Route, Routes } from "react-router-dom";
import MainTodo from "./todoMain";
import { AddPost } from "./addPost";
import { Test } from "./test";

export function AdminApp() {
  return (
    <>
      <NavbarItem />
      <div style={{ maxWidth: 700, margin: "2rem auto" }}>
        <Routes>
          <Route path="/todo" element={<MainTodo />}></Route>
          <Route path="/news" element={<AddPost />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </div>
    </>
  );
}

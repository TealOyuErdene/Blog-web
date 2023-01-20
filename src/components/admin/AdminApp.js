import NavbarItem from "./navbar";
import { Route, Routes } from "react-router-dom";
import MainTodo from "./todoMain";
export function AdminApp() {
  return (
    <>
      <NavbarItem />
      <div style={{ maxWidth: 700, margin: "2rem auto" }}>
        <Routes>
          <Route path="/todo" element={<MainTodo />}></Route>
        </Routes>
      </div>
    </>
  );
}

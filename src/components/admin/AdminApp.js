import NavbarAdmin from "./navbarAdmin";
import { Route, Routes } from "react-router-dom";
import MainTodo from "./todoMain";

import { ArticlesNew } from "./articlesNew";
import { Articles } from "./articles";
// import { Login } from "./Login";

export function AdminApp() {
  return (
    <>
      <NavbarAdmin />
      <div style={{ maxWidth: 700, margin: "2rem auto" }}>
        <Routes>
          <Route path="/categories" element={<MainTodo />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/new" element={<ArticlesNew />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </>
  );
}

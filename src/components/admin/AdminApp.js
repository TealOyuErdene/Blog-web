import NavbarAdmin from "./navbarAdmin";
import { Route, Routes } from "react-router-dom";
import MainTodo from "./todoMain";
import { ArticlesNew } from "./articlesNew";
import { Articles } from "./articles";
import { Login } from "./Login/main";
// import { Sidebar } from "./Sidebar/sidebar";

export function AdminApp() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <NavbarAdmin />
      {/* <Sidebar /> */}
      <div style={{ maxWidth: 1000, margin: "2rem auto" }}>
        <Routes>
          <Route path="/categories" element={<MainTodo />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/new" element={<ArticlesNew />} />
          <Route path="/articles/change" element={<ArticlesNew />} />
        </Routes>
      </div>
    </>
  );
}

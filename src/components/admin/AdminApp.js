import NavbarAdmin from "./navbarAdmin";
import { Route, Routes } from "react-router-dom";
import { ArticlesNew } from "./articlesNew";
import { Articles } from "./articles";
import { Login } from "./Login/main";
import { Categories } from "./categories";
// import { Sidebar } from "./Sidebar/sidebar";

export function AdminApp() {
  if (!localStorage.getItem("loginToken")) {
    return <Login />;
  }

  return (
    <>
      <NavbarAdmin />
      {/* <Sidebar /> */}
      <div style={{ maxWidth: 1000, margin: "2rem auto" }}>
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/new" element={<ArticlesNew />} />
          <Route path="/articles/change" element={<ArticlesNew />} />
        </Routes>
      </div>
    </>
  );
}

import NavbarItem from "./navbar";
import { Route, Routes } from "react-router-dom";
import MainTodo from "./todoMain";
import { Test } from "./test";
import { ArticlesNew } from "./articlesNew";
import { Articles } from "./articles";

export function AdminApp() {
  return (
    <>
      <NavbarItem />
      <div style={{ maxWidth: 700, margin: "2rem auto" }}>
        <Routes>
          <Route path="/categories" element={<MainTodo />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/new" element={<ArticlesNew />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </>
  );
}

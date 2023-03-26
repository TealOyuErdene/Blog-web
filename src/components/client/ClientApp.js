import "./main.css";
import { NavbarClient } from "./navbarClient";
import { Home } from "./homePage";
import { Routes, Route } from "react-router-dom";
import { SingleBlog } from "./singleBlog";
import { NotFound } from "../notFound";
import { FilteredCategory } from "./filteredCategory";
import { Register } from "../register";
export function ClientApp() {
  return (
    <>
      <NavbarClient />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<div>Blog List</div>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/articles/:categoryId" element={<FilteredCategory />} />
      </Routes>
    </>
  );
}

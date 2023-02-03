import { useEffect, useState } from "react";
import axios from "axios";
export function NavbarClient() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/categories`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setCategories(data);
      } else {
        alert(`Error: ${status}`);
      }
    });
  });

  return (
    <>
      <div className="container">
        <header className="blog-header lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1"></div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark " href="/home">
                The News Room
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Хайх</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Нэвтрэх
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            {categories.map((category) => (
              <a class="p-2 link-secondary news-categories" key={category.id}>
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
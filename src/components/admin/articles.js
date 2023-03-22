import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArticlesList } from "./articlesList";
import { Button } from "react-bootstrap";
export function Articles() {
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();
  const [pages, setPages] = useState();
  const [query, setQuery] = useState("");
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  function loadArticles(page) {
    const token = localStorage.getItem("loginToken");
    axios
      .get(`http://localhost:8000/articles?q=${query}&page=${page}`)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          const { list, count } = data;
          if (!list) {
            setArticles(data);
          } else {
            setArticles(list);
          }
          setPages(Math.ceil(count / 10));
        } else {
          alert(`Error: ${status}`);
        }
      });
  }

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    loadArticles(page);
  }, [page]);

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container" style={{ maxWidth: "580px" }}>
        <div className="d-flex justify-content-between mb-5">
          <Link to="/admin/articles/new">
            <Button className="btn">Мэдээ нэмэх</Button>
          </Link>
        </div>
      </div>

      <div className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {articles?.map((article) => {
              return (
                <div key={article._id}>
                  <ArticlesList article={article} loadArticles={loadArticles} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination" style={{ flexWrap: "wrap" }}>
          {page !== 1 && (
            <li className="page-item">
              <Link to={`?page=${page - 1}`} className="page-link">
                Өмнөх
              </Link>
            </li>
          )}

          {[...Array(pages)].map((_, index) => (
            <li
              key={index}
              className={`page item ${page == index + 1 ? "active" : ""}`}
            >
              <Link
                to={`?page=${index + 1}`}
                className="page-link"
                aria-current="page"
              >
                {index + 1}
              </Link>
            </li>
          ))}

          {page !== pages && (
            <li className="page-item">
              <Link to={`?page=${page + 1}`} className="page-link" href="#">
                Дараах
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

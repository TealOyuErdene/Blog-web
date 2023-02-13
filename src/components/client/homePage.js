import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();
  const [pages, setPages] = useState();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  function loadArticles(page, query = "") {
    axios
      .get(`http://localhost:8000/articles?q=${query}&page=${page}`)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          const { list, count } = data;
          setArticles(list);
          setPages(Math.ceil(count / 10));
        } else {
          alert(`Error: ${status}`);
        }
      });
  }

  useEffect(() => {
    loadArticles(page, "");
  }, [page]);

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {articles.map((article) => {
              return (
                <div className="col" key={article.id}>
                  <img
                    src={article.image}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderTopRightRadius: "5px",
                      borderTopLeftRadius: "5px",
                    }}
                  />
                  <div className="card shadow-sm" style={{ border: "none" }}>
                    <div className="card-body">
                      <p className="card-text">{article.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={`/blog/${article.id}`}
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Унших
                        </Link>
                      </div>
                    </div>
                  </div>
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

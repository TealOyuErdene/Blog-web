import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Link, useSearchParams } from "react-router-dom";
import img1 from "../../Images/404-not-found.gif";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArticlesList } from "./articlesList";
import { useDebounce } from "use-debounce";
export function Articles() {
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();
  const [pages, setPages] = useState();
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 1000);

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  function loadArticles(page) {
    const token = localStorage.getItem("loginToken");
    axios
      .get(
        `http://localhost:8000/articles?q=${searchedQuery}&page=${page}&token=${token}`
      )
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

  function searchedArticles(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    loadArticles(searchedQuery);
  }, [!searchedQuery]);

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    loadArticles(page);
  }, [page]);

  if (!articles) {
    return <div>Loading...</div>;
  }

  console.log(articles);
  if (articles.length === 0) {
    return (
      <>
        <Form.Control
          value={query}
          style={{ width: "12rem" }}
          placeholder="Мэдээ хайх"
          onChange={searchedArticles}
        />
        <div className="d-flex flex-column align-items-center">
          <img style={{ width: "50%" }} src={img1} />
          <h6 className="mt-5 ">
            "<b>{query}</b>" түлхүүрт илэрц олдсонгүй...
          </h6>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container" style={{ maxWidth: "580px" }}>
        <div className="d-flex justify-content-between mb-5">
          <Form.Control
            value={query}
            style={{ width: "12rem" }}
            placeholder="Мэдээ хайх"
            onChange={searchedArticles}
          />
          <Link to="/admin/articles/new">
            <AwesomeButton type="primary">Мэдээ нэмэх</AwesomeButton>
          </Link>
        </div>
      </div>

      <div className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {articles?.map((article) => {
              return (
                <div key={article.id}>
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

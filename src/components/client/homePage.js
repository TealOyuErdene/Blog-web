import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8000/articles`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setArticles(data);
      } else {
        alert(`Error: ${status}`);
      }
    });
  }, []);

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
    </>
  );
}

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [article, setArticle] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8000/articles`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setArticle(data);
      } else {
        alert(`Error: ${status}`);
      }
    });
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {article.map((articles) => {
              return (
                <div className="col" key={articles.id}>
                  <img
                    src={articles.image}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderTopRightRadius: "5px",
                      borderTopLeftRadius: "5px",
                    }}
                  />
                  <div className="card shadow-sm" style={{ border: "none" }}>
                    <div className="card-body">
                      <p className="card-text">{articles.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={`/blog/${articles.id}`}
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Унших
                        </Link>

                        {/* <small
                          className="text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          Өчигдөр
                        </small> */}
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

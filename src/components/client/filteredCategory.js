import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function FilteredCategory() {
  const [filteredArticle, setFilteredArticle] = useState();
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/articles/category/${categoryId}`)
      .then((res) => {
        const { data, status } = res;
        console.log(data);
        if (status === 200) {
          setFilteredArticle(data);
        } else {
          alert(`Error: ${status}`);
        }
      });
  }, [categoryId]);

  if (!filteredArticle) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {filteredArticle.map((article) => {
              return (
                <div className="col" key={article._id}>
                  <img
                    src={article.image.path}
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
                          to={`/blog/${article._id}`}
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

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function FilteredCategory() {
  const [singleCategory, setSingleCategory] = useState();
  const { categoryId } = useParams();
  //   const [article, setArticle] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/category/${categoryId}`)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setSingleCategory(data);
        } else {
          alert(`Error: ${status}`);
        }
      });
  }, [categoryId]);

  //   useEffect(() => {
  //     axios.get(`http://localhost:8000/categories`).then((res) => {
  //       const { data, status } = res;
  //       if (status === 200) {
  //         setArticle(data);
  //       } else {
  //         alert(`Error: ${status}`);
  //       }
  //     });
  //   }, []);

  if (!singleCategory) {
    return <div>Loading...</div>;
  }

  //   if (!article) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <>
      {/* <div>{article.category?.name}</div> */}
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {singleCategory.map((category) => {
              return (
                <div className="col" key={category.id}>
                  <img
                    src={category.image}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderTopRightRadius: "5px",
                      borderTopLeftRadius: "5px",
                    }}
                  />
                  <div className="card shadow-sm" style={{ border: "none" }}>
                    <div className="card-body">
                      <p className="card-text">{category.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={`/blog/${category.id}`}
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

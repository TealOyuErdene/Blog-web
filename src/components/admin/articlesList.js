import axios from "axios";
import { Link } from "react-router-dom";

export function ArticlesList({ article, loadArticles }) {
  function handleDelete(id) {
    if (window.confirm("Устгах уу")) {
      axios.delete(`http://localhost:8000/articles/item/${id}`).then((res) => {
        const { status } = res;
        if (status === 200) {
          loadArticles();
          window.location.reload();
        }
      });
    }
  }

  function updateArticle() {}
  return (
    <>
      <div className="wrapper" key={article.id}>
        <div className="blog">
          <div className="card-banner">
            <img className="banner-img" src={article.image} alt="" />
          </div>
          <div className="blog-body">
            <p className="blog-time">Today</p>
            <p className="blog-title">{article.title}</p>

            <div className="mt-4 d-flex justify-content-end gap-3">
              <Link
                to={"/admin/articles/change"}
                type="button"
                className="btn btn-outline-secondary"
                onClick={updateArticle}
              >
                Засах
              </Link>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => handleDelete(article.id)}
              >
                Устгах
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

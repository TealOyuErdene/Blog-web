import axios from "axios";
import { Link } from "react-router-dom";

export function ArticlesList({ article, loadArticles }) {
  function handleDelete(_id) {
    if (window.confirm("Устгах уу")) {
      axios.delete(`http://localhost:8000/articles/item/${_id}`).then((res) => {
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
      <div className="wrapper" key={article._id}>
        <div className="blog">
          <div className="card-banner">
            {article.image ? (
              <img
                className="banner-img"
                src={article.image.path}
                width="100"
                alt=""
              />
            ) : (
              <div></div>
            )}
          </div>
          <div className="blog-body">
            <p className="blog-time">{article.categoryId?.name}</p>
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
                onClick={() => handleDelete(article._id)}
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

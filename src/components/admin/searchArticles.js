import axios from "axios";
import { useEffect, useState } from "react";
import { ArticlesList } from "./articlesList";

export function SearchArticles({ searchedQuery }) {
  const [articles, setArticles] = useState([]);

  function loadArticles(searchedQuery = "") {
    const token = localStorage.getItem("loginToken");
    axios
      .get(`http://localhost:8000/articles?q=${searchedQuery}&token=${token}`)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setArticles(data);
        } else {
          alert(`Error: ${status}`);
        }
      });
  }

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <>
      <div className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {articles.map((article) => {
              return (
                <div key={article.id}>
                  <ArticlesList article={article} loadArticles={loadArticles} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

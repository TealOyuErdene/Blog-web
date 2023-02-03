import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

export function SingleBlog() {
  const { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8000/articles/${id}`).then((res) => {
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
      <div className="container mt-5" style={{ maxWidth: 700 }}>
        <h1>{article.title}</h1>
        <div className="content mt-3">{parse(article.text)}</div>
      </div>
    </>
  );
}

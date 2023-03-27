import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import Badge from "react-bootstrap/Badge";
import { useParams } from "react-router-dom";

export function SingleBlog() {
  const { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/articles/${id}`).then((res) => {
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
        <Badge
          pill
          bg="secondary"
          text="light"
          className="mb-3"
          style={{ fontSize: "11px" }}
        >
          {article.category?.name}
        </Badge>

        <h1>{article.title}</h1>
        <img style={{ width: "100%" }} src={article.image.path} />
        <div className="content mt-3">{parse(article.text)}</div>
      </div>
    </>
  );
}

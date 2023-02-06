import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export function Home() {
  const id = "bcfafb92-fa5d-47ca-96ae-c2f902178d46";
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
      <div className="container">
        <div
          className="p-4 p-md-5 mb-4 rounded"
          style={{ backgroundColor: "#96C7C1" }}
        >
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Мэдээний гарчиг</h1>
            <p className="lead my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar nibh felis, a porta velit dapibus id. Donec volutpat enim
              vitae dapibus vehicula. Cras iaculis nulla eu enim dignissim
              vestibulum.
            </p>
            <p className="lead mb-0">
              <Link to="" className="text-white fw-bold">
                Унших
              </Link>
            </p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  {article.category?.name}
                </strong>
                <h3 className="mb-0"> Мэдээний Гарчиг</h3>
                <div className="mb-1 text-muted">Nov 10</div>
                <p className="card-text mb-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Link
                  to="/blog/bcfafb92-fa5d-47ca-96ae-c2f902178d46"
                  className="stretched-link"
                >
                  Унших
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#89B5AF" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Зураг
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

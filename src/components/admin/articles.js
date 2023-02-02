import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";
export function Articles() {
  return (
    <>
      <div className="container" style={{ maxWidth: "580px" }}>
        <div className="d-flex justify-content-between mb-5">
          <Form.Control style={{ width: "12rem" }} placeholder="Мэдээ хайх" />
          <Link to="/admin/articles/new">
            <AwesomeButton type="primary">Мэдээ нэмэх</AwesomeButton>
          </Link>
        </div>
      </div>
    </>
  );
}

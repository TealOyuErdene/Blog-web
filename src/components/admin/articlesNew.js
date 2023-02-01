import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Modal from "react-bootstrap/Modal";
import { UploadImage } from "./uploadImage";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

export function ArticlesNew() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [text, setText] = useState("");
  const [categories, setCategories] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/categories`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setCategories(data);
      } else {
        alert(`Error: ${status}`);
      }
    });
  }, []);

  return (
    <>
      <div className="container" style={{ maxWidth: "580px" }}>
        <div className="d-flex justify-content-between mb-5">
          <AwesomeButton type="primary" onPress={handleShow}>
            Мэдээ нэмэх
          </AwesomeButton>
        </div>

        <select value={value} onChange={(e)=> onchange(e.target.value)}>
          <option value="">Ангилалгүй</option>
          {categories.map((category)=> (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>

        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>{<UploadImage />}</Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="btn btn-outline-danger" onClick={handleClose}>
            Хаах
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

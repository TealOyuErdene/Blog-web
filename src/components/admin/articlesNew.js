import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Modal from "react-bootstrap/Modal";
import { UploadImage } from "./uploadImage";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { CategoriesSelector } from "./categoriesSelector";

export function ArticlesNew() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [text, setText] = useState("");
  const [categoryId, setCategoryId] = useState("");

  return (
    <>
      <div className="container" style={{ maxWidth: "580px" }}>
        <div className="d-flex justify-content-between mb-5">
          <AwesomeButton type="primary" onPress={handleShow}>
            Мэдээ нэмэх
          </AwesomeButton>
        </div>

        <CategoriesSelector
          value={categoryId}
          onChange={(val) => setCategoryId(val)}
        />

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

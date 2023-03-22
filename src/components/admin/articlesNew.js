import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { CategoriesSelector } from "./categoriesSelector";
import axios from "axios";
import Form from "react-bootstrap/Form";

export function ArticlesNew() {
  const [text, setText] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  function submit() {
    axios
      .post("http://localhost:8000/articles", {
        title,
        text,
        categoryId,
        image,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("success");
          setTitle("");
          setCategoryId("");
          setText("");
          setImage(null);
        }
      });
  }

  async function handleFileUpload(event) {
    setUploading(true);
    const imageFile = event.target.files[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    await fetch("http://localhost:8000/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
        setUploading(false);
      });
  }

  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "580px", marginTop: "5rem" }}
      >
        <Form.Control
          className="mb-4"
          value={title}
          placeholder="Мэдээний гарчиг"
          onChange={(e) => setTitle(e.target.value)}
        />
        <CategoriesSelector
          value={categoryId}
          onChange={(val) => setCategoryId(val)}
        />

        <div className="mt-4">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </div>

        <div className="mt-4">
          <input
            type="file"
            className="form-control me-2"
            name="image"
            onChange={handleFileUpload}
          />

          {uploading && <div className="spinner-border" role="status"></div>}
          {image && <img src={image.path} width="100" alt="" />}
        </div>

        <button className="btn btn-primary mt-4" onClick={submit}>
          Хадгалах
        </button>
      </div>
    </>
  );
}

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
  const [image, setImage] = useState();

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
          setImage("");
          setText("");
        }
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

        <Form.Control
          type="url"
          placeholder="Мэдээний зураг"
          className="mt-4"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
        <button className="btn btn-primary mt-4" onClick={submit}>
          Хадгалах
        </button>
      </div>
    </>
  );
}

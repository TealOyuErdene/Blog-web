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

  function submit() {
    axios
      .post("http://localhost:8000/articles", {
        title, //title: title,
        categoryId, //categoryId: categoryId,
        text, //text: text,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("success");
        }
      });
  }

  return (
    <>
      <div className="container" style={{ maxWidth: "580px" }}>
        <CategoriesSelector
          value={categoryId}
          onChange={(val) => setCategoryId(val)}
        />

        <Form.Control
          value={title}
          placeholder="Мэдээний гарчиг"
          onChange={(e) => setTitle(e.target.value)}
        />

        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
        {/* <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
        <button className="btn btn-primary" onClick={submit}>
          Хадгалах
        </button>
      </div>
    </>
  );
}

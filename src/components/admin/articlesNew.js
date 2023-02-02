import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { CategoriesSelector } from "./categoriesSelector";

export function ArticlesNew() {

  const [text, setText] = useState("");
  const [categoryId, setCategoryId] = useState("");

  return (
    <>
      <div className="container" style={{ maxWidth: "580px" }}>
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
    </>
  );
}

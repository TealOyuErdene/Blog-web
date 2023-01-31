import "./main.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { NavbarMain } from "./navbar";
import { AddPost } from "./post";
export function ClientApp() {
  const [text, setText] = useState("");
  return (
    <>
      <NavbarMain />
      <AddPost />
      {/* <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
        }}
      /> */}

      <div dangerouslySetInnerHTML={{ __html: text }}></div>
    </>
  );
}

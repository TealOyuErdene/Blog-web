import { NavbarMain } from "./navbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { Addnews } from "./addNews";
export function ClientApp() {
  const [text, setText] = useState("");
  return (
    <>
      <NavbarMain />
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
        }}
      />

      <div dangerouslySetInnerHTML={{ __html: text }}></div>
      <Addnews />
    </>
  );
}

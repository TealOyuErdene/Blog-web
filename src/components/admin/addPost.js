import { useState } from "react";
export function AddPost() {
  const [selectedImage, setSelectedImage] = useState();
  console.log(selectedImage)
  function handleImage(e){
    console.log(e.target.files)
    setSelectedImage(e.target.files)
  }
  return (
    <>
      <div className="uploadImage">
        <label htmlFor="selectImage">Upload image</label>
      </div>
      <input
        type="file"
        id="selectImage"
        accept="image/png, image/jpeg"
        onChange={handleImage}
        style={{ display: "none" }}
      />
      {/* <h2>Title</h2>
      <p>Text</p> */}
    </>
  );
}

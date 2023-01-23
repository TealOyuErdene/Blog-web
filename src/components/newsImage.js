import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import ImageUploading from "react-images-uploading";

export function newsImage() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <button
                className="uploadImage"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              <button onClick={onImageRemoveAll} className="uploadImage">
                Remove all images
              </button>
              <Card style={{ width: "16rem", border: "none" }} className="mt-5">
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <Card.Img variant="top" src={image["data_url"]} alt="" />
                    <Card.Body className="image-item__btn-wrapper">
                      <Button
                        style={{ fontSize: "8px" }}
                        variant="primary"
                        onClick={() => onImageUpdate(index)}
                        className="changerUploadImage"
                      >
                        Update
                      </Button>
                      <Button
                        style={{ fontSize: "8px" }}
                        variant="danger"
                        onClick={() => onImageRemove(index)}
                        className="changerUploadImage"
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </div>
                ))}
              </Card>
            </div>
          )}
        </ImageUploading>
      </div>
    </>
  );
}

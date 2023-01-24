import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import ImageUploading from "react-images-uploading";

export function UploadImage() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <div>
        <div
          className="border-bottom"
          style={{ borderColor: "rgba(0, 0, 0, 0.175)", marginBottom: "30px" }}
        >
          <h3>Зураг нэмэх хэсэг</h3>
        </div>
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
            <div className="upload__image-wrapper d-flex flex-column align-items-center">
              {/* <button
                className="uploadImage"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Upload Image
              </button> */}

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Icons8_flat_add_image.svg/1024px-Icons8_flat_add_image.svg.png"
                onClick={onImageUpload}
                {...dragProps}
                style={{
                  display: onImageUpload ? "block" : "none",
                  width: "8rem",
                }}
              />

              {/* one onclick two function  */}
              {/* https://upmostly.com/tutorials/adding-multiple-functions-inside-a-single-onclick-event-handler */}

              {/* <button onClick={onImageRemoveAll} className="uploadImage">
                Remove all images
              </button> */}
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

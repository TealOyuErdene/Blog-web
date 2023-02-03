import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import img1 from "../../Images/404-not-found.gif";
export function TodoNew({
  loadCategory,
  editingId,
  onClose,
  onShow,
  show,
  query,
  setQuery,
  list,
}) {
  let [text, setText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  function handleKeyUp(e) {
    if (e.code === "Enter") {
      handleSave();
    }
  }

  useEffect(() => {
    if (editingId && editingId !== "new") {
      axios
        .get(` http://localhost:8000/categories/${editingId}`)
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            setName(data.name);
          } else {
            alert(`Error: ${status}`);
          }
        });
    }
  }, [editingId]);

  function handleSave() {
    if (text === {} || name === {}) {
      setError("Утга бичнэ үү.");
    } else {
      setLoading(true);
      if (editingId === "new") {
        axios
          .post("http://localhost:8000/categories", {
            name: text,
          })
          .then((res) => {
            const { status } = res;
            if (status === 201) {
              loadCategory();
              onClose();
              setLoading(false);
              setText("");
              setError("");
              toast.success("Амжилттай нэмэгдлээ", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          });
      } else {
        axios
          .put(`http://localhost:8000/categories/${editingId}`, { name: name })
          .then((res) => {
            const { status } = res;
            if (status === 200) {
              loadCategory();
              onClose();
              setName("");
              setLoading(false);
              setError("");
              toast.success("Амжилттай засагдлаа", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          });
      }
    }
  }

  if (list.length === 0) {
    return (
      <>
        <Form.Control
          style={{ width: "12rem" }}
          value={query}
          placeholder="Ангилал хайх"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="d-flex flex-column align-items-center">
          <img style={{ width: "50%" }} src={img1} />
          <h6 className="mt-5 ">
            "<b>{query}</b>"" түлхүүрт илэрц олдсонгүй...
          </h6>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-5">
        <Form.Control
          style={{ width: "12rem" }}
          value={query}
          placeholder="Ангилал хайх"
          onChange={(e) => setQuery(e.target.value)}
        />
        <AwesomeButton type="primary" onPress={onShow}>
          Ангилал нэмэх
        </AwesomeButton>
      </div>

      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          {editingId === "new" ? (
            <>
              <Modal.Title>Ангилал нэмэх</Modal.Title>
            </>
          ) : (
            <>
              <Modal.Title>Ангилал засах</Modal.Title>
            </>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Нэр</Form.Label>
            {editingId === "new" ? (
              <>
                <Form.Control
                  placeholder="Ангиллаа нэмнэ үү"
                  type="text"
                  autoFocus
                  value={text}
                  disabled={loading}
                  onChange={(e) => setText(e.target.value)}
                  onKeyUp={handleKeyUp}
                  style={{ borderColor: error ? "red" : "none" }}
                />
              </>
            ) : (
              <>
                <Form.Control
                  placeholder="Ангиллаа засна уу"
                  type="text"
                  autoFocus
                  value={name}
                  disabled={loading}
                  onChange={(e) => setName(e.target.value)}
                  onKeyUp={handleKeyUp}
                  style={{ borderColor: error ? "red" : "none" }}
                />
              </>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {loading ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : (
            <>
              {editingId === "new" ? (
                <>
                  {" "}
                  <Button
                    variant="outline-danger me-auto"
                    disabled={loading}
                    onClick={onClose}
                  >
                    Буцах
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button
                    variant="outline-danger me-auto"
                    disabled={loading}
                    onClick={onClose}
                  >
                    Болих
                  </Button>
                </>
              )}

              <Button variant="primary" disabled={loading} onClick={handleSave}>
                Хадгалах
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

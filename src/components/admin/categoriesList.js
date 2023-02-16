import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

export function CategoriesList({ list, loadCategory, onEdit }) {
  function handleDelete(id) {
    if (window.confirm("Устгах уу")) {
      axios.delete(`http://localhost:8000/categories/${id}`).then((res) => {
        const { status } = res;
        if (status === 200) {
          loadCategory();
        }
      });
    }
  }

  return (
    <>
      <ul style={{ paddingLeft: "0px" }}>
        {list.map((todo) => {
          return (
            <div className="d-flex" key={todo.id}>
              <NormalItem
                handleDelete={handleDelete}
                todo={todo}
                onEdit={onEdit}
              />
            </div>
          );
        })}
      </ul>
    </>
  );
}

function NormalItem({ handleDelete, todo, onEdit }) {
  return (
    <>
      <Card
        className="mb-4 d-flex flex-row col-lg-6 "
        style={{ width: "400px" }}
      >
        <Card.Body>{todo.name}</Card.Body>
      </Card>
      <Button
        variant="outline-secondary mt-2 mx-3 border-0"
        style={{ height: "35px" }}
        onClick={() => onEdit(todo.id)}
      >
        Засах
      </Button>
      <Button
        variant="outline-secondary mt-2 me-2 border-0"
        style={{ height: "35px" }}
        onClick={() => handleDelete(todo.id)}
      >
        Устгах
      </Button>
    </>
  );
}

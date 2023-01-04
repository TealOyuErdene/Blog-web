import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

let categories = [
  {
    id: 1,
    name: "Улс төр",
  },

  {
    id: 2,
    name: "Нийгэм",
  },

  {
    id: 3,
    name: "Спорт",
  },
];

function CategoryList() {
  return (
    <>
      {categories.map((category) => (
        <Card className="mb-4 d-flex flex-row" key={category.id}>
          <Card.Body>{category.name}</Card.Body>
          <Button
            variant="outline-secondary mt-2 me-2 border-0"
            style={{ height: "35px" }}
          >
            Засах
          </Button>
        </Card>
      ))}
    </>
  );
}

export default CategoryList;

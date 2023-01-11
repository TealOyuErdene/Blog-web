import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
export function TodoList({
  todos,
  editingTexts,
  cancelEditingText,
  updateEditingText,
  handleDoneChange,
  editTodoInline,
  handleDelete,
  handleEditingText,
}) {
  return (
    <>
      <ul style={{ paddingLeft: "0px" }}>
        {todos.map((todo, index1) => {
          return (
            <div key={todo.id}>
              {editingTexts[todo.id] !== undefined ? (
                <>
                  <EditingItem handleEditingText={handleEditingText} cancelEditingText={cancelEditingText} updateEditingText={updateEditingText} todo={todo} index1={index1}/>
                </>
              ) : (
                <div className="d-flex">
                  <NormalItem
                    handleDelete={handleDelete}
                    handleDoneChange={handleDoneChange}
                    editTodoInline={editTodoInline}
                    todo={todo}
                    index1={index1}
                  />
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </>
  );
}

function NormalItem({
  handleDoneChange,
  editTodoInline,
  handleDelete,
  todo,
  index1,
}) {
  return (
    <>
      <Card
        className="mb-4 d-flex flex-row col-lg-6 "
        style={{ width: "400px" }}
      >
        <input
          type="checkbox"
          onChange={() => handleDoneChange(todo.id)}
          style={{ marginLeft: "10px" }}
        />
        <Card.Body
          style={{
            textDecoration: todo.done ? "line-through" : "none",
            fontSize: "20px",
          }}
        >
          {todo.text}
        </Card.Body>
      </Card>
      {!todo.done && (
        <Button
          variant="outline-secondary mt-2 mx-3 border-0"
          style={{ height: "35px" }}
          onClick={() => editTodoInline(todo.id, index1)}
        >
          Засах
        </Button>
      )}
      <Button
        variant="outline-secondary mt-2 me-2 border-0"
        style={{ height: "35px" }}
        onClick={() => handleDelete(index1)}
      >
        Устгах
      </Button>
    </>
  );
}

function EditingItem({handleEditingText, cancelEditingText, updateEditingText, todo, index1}) {
  return (
    <>
      <Card
        className="d-flex flex-row gap-3 mb-4"
        style={{ border: "none", width: "610px", height: "64px" }}
      >
        <InputGroup size="lg">
          <Form.Control
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => handleEditingText(todo.id, e)}
            // style={{borderColor: "" ?  "red" : "black"}}
          />
        </InputGroup>
        <Button
          variant="outline-secondary mt-2 me-2 border-0"
          style={{ height: "35px" }}
          onClick={() => cancelEditingText(todo.id)}
        >
          Болих
        </Button>

        <Button
          variant="outline-secondary mt-2 me-2 border-0"
          style={{ height: "35px" }}
          onClick={() => updateEditingText(index1, todo.id)}
        >
          Хадгалах
        </Button>
      </Card>
    </>
  );
}

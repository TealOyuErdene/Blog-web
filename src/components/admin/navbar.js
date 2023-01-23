import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AwesomeButton } from "react-awesome-button";
import { Link, NavLink } from "react-router-dom";
import "react-awesome-button/dist/styles.css";

function NavbarItem() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand to="/admin" as={Link}>
            Админ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                to="/admin/todo"
                as={NavLink}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "none",
                })}
              >
                Ангилал
              </Nav.Link>
              <Nav.Link to="/admin/news" as={NavLink}>
                Мэдээ
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <AwesomeButton type="danger">Гарах</AwesomeButton>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarItem;

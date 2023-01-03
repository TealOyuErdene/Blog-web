import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card'

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


function Admin() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand href="#">Админ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="#action1">Хэрэглэгч</Nav.Link>
            <Nav.Link href="#action2">Ангилал</Nav.Link>
            <NavDropdown title="Мэдээ" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Мэдээ</NavDropdown.Item>
                <NavDropdown.Item href="#action4"> Сэтгэгдэл</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Шинэ мэдээ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled> Сэдэв</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <AwesomeButton type="danger">Гарах</AwesomeButton>
            </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>

    <div gap={2} className="col-md-5 mx-auto mt-5">
        <div className='d-flex'>
            <h1 className='mb-4'>Ангилал</h1>
            <Button className="outline-primary ms-auto mt-2" style={{height: '35px'}} onClick={handleShow}>Шинэ</Button>
        </div>
        <Card className='mb-4 d-flex flex-row'>
            <Card.Body>Улс төр</Card.Body>
            <Button variant="outline-secondary mt-2 me-2 border-0" style={{height: '35px'}}>Засах</Button>
        </Card>

        <Card className='mb-4 d-flex flex-row'>
            <Card.Body>Нийгэм</Card.Body>
            <Button variant="outline-secondary mt-2 me-2 border-0" style={{height: '35px'}}>Засах</Button>
        </Card>

        <Card className='mb-4 d-flex flex-row'>
            <Card.Body>Спорт</Card.Body>
            <Button variant="outline-secondary mt-2 me-2 border-0" style={{height: '35px'}}>Засах</Button>
        </Card>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Нэр</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ангиллын нэр"
                autoFocus
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger me-auto" onClick={handleClose}>Устгах</Button>
          <Button variant="primary" onClick={handleClose}>Хадгалах</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default Admin;
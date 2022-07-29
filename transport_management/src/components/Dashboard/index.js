import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoMenu } from "react-icons/io5";


class index extends Component {
  state = {
    home: false,
    teacher: false,
  }

  onLaunch = () => {
    this.setState({
      home: true,

    });
  }
  onhide = () => {
    this.setState({
      home: false,
    });
  }


  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Button variant="primary" onClick={this.onLaunch} style={{ backgroundColor: 'white' }}> <IoMenu style={{ color: 'black' }} /> </Button>
          <Offcanvas show={this.state.home} onHide={this.onhide} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Dashboard</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav.Link href="/">Home</Nav.Link>
              <p className="mb-0">
                This is content within an <code>.offcanvas-lg</code>.
              </p>
            </Offcanvas.Body>
          </Offcanvas>
          <Container>
            <Navbar.Brand href="#home">Transport Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/teacher">Lorry</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default index;
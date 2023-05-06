import React from 'react'
// import {Container} from 'semantic-ui-react'
import 'bootstrap';
import 'react-bootstrap';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function workingNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/home">Student Registration Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

{/* //figure out why links work to other pages using Link tag but not the Nav.Link tag */}
          
            <Nav.Link href="/home" >Home</Nav.Link>
         
            <Nav.Link href="/create" >Create an account</Nav.Link>
            <NavDropdown title="Actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="/update">Update Student Information</NavDropdown.Item>
            <NavDropdown.Item href="/read">
                View All Students
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


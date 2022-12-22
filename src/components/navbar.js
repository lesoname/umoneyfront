import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-5'>
      <Container>
        <Navbar.Brand href="/">
          Umoney APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          
          <Nav>
            <Nav.Link href="/create">
              Create
            </Nav.Link>
            <Nav.Link eventKey={2} href="/read">
              Show
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
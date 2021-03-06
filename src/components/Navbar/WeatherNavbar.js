// Navbar for weather page, this should include the following:

// Logo
// About
// Search

import React from 'react';
import { Navbar, Nav, NavDropdown, InputGroup, FormControl } from "react-bootstrap";
import './WeatherNavbar.css';

const WeatherNavbar = () => {
    return (
            <>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                    <InputGroup size="sm" className="mb-3">
                      <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">Enter Zip Code</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </>
    )
}

export default WeatherNavbar;
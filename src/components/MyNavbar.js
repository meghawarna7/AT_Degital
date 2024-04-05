import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'; // Import the logo image
import './MyNavbar.css'; // Import the custom CSS file

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg" expanded={expanded}>
      <Container>
        {/* Logo/Brand */}
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        >
          {expanded ? <span>&#10005;</span> : <span>&#9776;</span>}
        </Navbar.Toggle>

        {/* Navbar items */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links aligned to the right */}
          <Nav className="ml-auto">
            <Nav.Link href="#link">SERVICES</Nav.Link>
            <Nav.Link href="#link">ABOUT US</Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
            <Nav.Link href="#link">CAREERS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

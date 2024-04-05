import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Import the custom CSS file
import logo from '../assets/logo.png'; // Import the logo image

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* First Column: Logo and Description */}
          <Col xs={12} md={4}>
            <div className="logo">
              <img src={logo}  alt="Logo" />
            </div>
            <div className="description">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </div>
          </Col>
          
          {/* Second Column: Four Links */}
          <Col xs={12} md={4}>
            <ul className="footer-links">
                <h4>Our Technologies</h4>
              <li><a href="#link1">ReactJS</a></li>
              <li><a href="#link2">Gatsby</a></li>
              <li><a href="#link3">NextJS</a></li>
              <li><a href="#link4">NodeJS</a></li>
            </ul>
          </Col>
          
          {/* Third Column: Four Links */}
          <Col xs={12} md={4}>
            <ul className="footer-links">
            <h4>Our Services</h4>
              <li><a href="#link5">Social media Marketing</a></li>
              <li><a href="#link6">Web & Mobile App Development</a></li>
              <li><a href="#link7">Data & Analytics</a></li>
             
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6}>
            <hr className="hr-white" />
            <div className="underline-words">
              <span>Privacy Policy </span>
              <span> | </span>
              <span> Terms & Conditions</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

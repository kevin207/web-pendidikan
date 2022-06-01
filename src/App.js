import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Bootsrap Nav
import { Navbar, Nav, NavbarBrand, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Pages
import Home from "./pages/home/Home";
import Testimonial from "./pages/testimonial/Testimonial";
import Program from "./pages/program/Program";
import Gallery from "./pages/gallery/Gallery";

//Universal Component
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark" sticky="top">
        <Container>
          <NavbarBrand href="#home">Brain.co</NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/program">
                <Nav.Link>Program</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/testimonial">
                <Nav.Link>Testimoni</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/gallery">
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/web-pendidikan" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

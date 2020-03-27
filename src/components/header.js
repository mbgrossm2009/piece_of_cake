import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'gatsby'


const Header = () => (
  <div>
  
  <Navbar bg="" expand="lg">
    <Navbar.Brand href="#home">Piece of Cake </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link> <Link to='/aboutus'>About Us</Link> </Nav.Link>
        <Nav.Link><Link to='/order'>Order Online</Link></Nav.Link>
        <Nav.Link><Link to='/signin'>Sign in/Register</Link></Nav.Link>
        <Nav.Link><Link to='/guestbook'>Guest Book</Link></Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
  </div>

)

export default Header

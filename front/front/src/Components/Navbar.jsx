import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./Navbar.css"







function Navba() {
 
  

  return (
    <Navbar bg="light" expand="lg" className='navbar'>
    <Container className='container'>
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      
    
        <Nav className="me-auto">
          <Nav.Link href="/" className='link'>Home</Nav.Link>
          <Nav.Link href="/login"  className='link'>Login</Nav.Link>
          <Nav.Link href="/store"  className='link'>Store</Nav.Link>
        </Nav>
   

    </Container>
  </Navbar>
  );
};


export default Navba
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';






function Navba() {
 
 const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {

    setAnchorEl(null);
    navigate("/profile")
  };
  const Logout = ()=> {
    localStorage.removeItem('token');
    setAnchorEl(null);
    navigate('/');
  };

  return (
    <Navbar bg="light" expand="lg" className='navbar'>
    <Container className='container'>
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      
    
        <Nav className="me-auto">
          <Nav.Link href="/" className='link'>Home</Nav.Link>
          <Nav.Link href="/login"  className='link'>Login</Nav.Link>
          <Nav.Link href="/store"  className='link'>Store</Nav.Link>

         
          <div className='icons'>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={Logout}>logout</MenuItem>
              </Menu>
            </div>
            
        </Nav>
   

    </Container>
  </Navbar>
  );
};


export default Navba
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../images/default_transparent_765x625.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar position="sticky" elevation={0} className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <Container className="navbar-container navbar-nav">
          <Navbar.Brand  className="logo nav-item">
          <Link to="/">
            <img 
              src={logo}
              width="160"
              height="80"
              className="d-inline-block align-top navbar-brand"
              alt="Logo de Cine Adicto con enlace a la página de Inicio"
            />
            </Link>
          </Navbar.Brand>
          <Link to="/profile">  
          <span 
          className='nav-text'>Mi perfil</span>        
          <FontAwesomeIcon 
          className= 'nav-item'
          style={{color: 'white', fontSize: '30px', cursor:'pointer' }} 
          icon="fa-regular fa-user"  
          aria-label='Entra en tu perfil'>          
          </FontAwesomeIcon> 
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import logo from '../images/default_transparent_765x625.png';
import {  Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { StyledButton, StyledInput } from '../styled/styledcomponents';
import SignUp from './SignUp';
const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='login root'>
       <Navbar.Brand  className="logo nav-item">
          <Link to="/">
            <img 
              src={logo}
              width="180"
              height="80"
              className="d-inline-block align-top navbar-brand"
              alt="Logo de Cine Adicto"
            />
            </Link>
          </Navbar.Brand>
          <div className='info'>
            {
              !signIn ? (<SignUp/>) : (
                <>
                <h1>Películas ilimitadas, series de TV y más.</h1>
                <h2>Ver en cualquier lugar. Cancela en el momento</h2>
                <h3>¿listo para ver? Introduce tu correo electrónico para crear o reiniciar tu suscripción</h3>
              
              <div className='inputBlock'>
                <StyledInput placeholder='Dirección de correo'></StyledInput>
                <StyledButton wide='medium' onClick={()=> setSignIn(true)}>GET STARTED</StyledButton>
              </div>
              </>
              )
            }
          </div> 
    </div>
  )
}

export default Login

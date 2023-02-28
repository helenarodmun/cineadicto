import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <h1 className='footer__text'>CineAdicto © 2023</h1>
        <div className='footer__social'>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label='Visita nuestra página de Facebook'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' aria-label='Visita nuestra página de Twitter' >
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' aria-label='Visita nuestra página de Instagram'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <div className='footer__license'>
            <img alt='Creative Commons Licence, CineAdicto by Juan Pablo Cabrillana y Helena Rodríguez' src='https://i.creativecommons.org/l/by/4.0/88x31.png' />
         
          <br />
          <p>CineAdicto</p> by <span>Juan Pablo Cabrillana y Helena Rodríguez</span> is licensed under a{' '}
          <a rel='license' className='license' href='http://creativecommons.org/licenses/by/4.0/'>
            Creative Commons Attribution 4.0 International License
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;


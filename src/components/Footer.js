import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p className='footer__text'>CineAdicto © 2023</p>
        <div className='footer__social'>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <div className='footer__license'>
          <a rel='license' href='http://creativecommons.org/licenses/by/4.0/'>
            <img alt='Creative Commons Licence, CineAdicto by Juan Pablo Cabrillana y Helena Rodríguez' src='https://i.creativecommons.org/l/by/4.0/88x31.png' />
          </a>
          <br />
          <span>CineAdicto</span> by <span>Juan Pablo Cabrillana y Helena Rodríguez</span> is licensed under a{' '}
          <a rel='license' href='http://creativecommons.org/licenses/by/4.0/'>
            Creative Commons Attribution 4.0 International License
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;


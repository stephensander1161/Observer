import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                      <i className="far fa-eye"></i>

            Observer
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/stills'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Stills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/on-set'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                On Set
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/trailers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Trailers
              </Link>
            </li>
             <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            
            
          </ul>
          {button && <Link to='/contact'><Button buttonStyle='btn--outline'>Contact</Button></Link>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='header-wrapper container'>
        <h3>Todo Application</h3>
        <Link className='header-about' to='/about'>
          About
        </Link>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar  sticky-top navbar-expand-lg navbar-light bg-navbar'>
        <Link className='navbar-brand' href='/'>
          E-learning
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-link active' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
            <Link className='nav-link active' to='/about'>
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

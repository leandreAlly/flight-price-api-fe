import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <span className='navbar-brand'>Flight Price App</span>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

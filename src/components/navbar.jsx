import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">Cyberdost</div>
      <div className="list">
        <ul className="ul1">
          <li className="li1">
            <NavLink to="/" className="anchor">Home</NavLink>
          </li>
          <li className="li1">
            <NavLink to="/news" className="anchor">News</NavLink>
          </li>
          <li className="li1">
            <NavLink to="/GovtMeasures" className="anchor">Measures</NavLink>
          </li>
          <li className="li1">
            <NavLink to="/forum" className="anchor">Forum</NavLink>
          </li>
          <li className="li1">
            <NavLink to="/login" className="anchor">Login</NavLink>
          </li>
          <li className="li1">
            <NavLink to="/signup" className="anchor">Sign up</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

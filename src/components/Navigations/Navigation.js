import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="Navigation-bar">
    <h1>Math Magician</h1>
    <div className="navLinks">
      <NavLink exact to="/" activeClassName="nav-active" className="link-el">Home</NavLink>
      <NavLink exact to="/Calculator" activeClassName="nav-active" className="link-el">Calculator</NavLink>
      <NavLink exact to="/Quotes" activeClassName="nav-active" className="link-el">Quotes</NavLink>
    </div>
  </div>
);

export default Navigation;

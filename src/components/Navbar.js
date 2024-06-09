import React from 'react';
import { FaCaretDown, FaCaretRight, FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">GO FOOD</div>
      <ul className="nav-links">
        <li className="dropdown">
          <a href="/">Home <FaCaretDown /></a>
          <div className="dropdown-content">
            <a href="#home1">Breakfast</a>
            <a href="#home2">Lunch</a>
            <a href="#home3">Dinner</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="/groceries">Groceries <FaCaretDown /></a>
          <div className="dropdown-content" >
            <a href="#groceries1">Groccery1</a>
            <a href="#groceries2">Groccery1</a>
            <a href="#groceries3">Groccery1</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="/pages">Pages <FaCaretDown /></a>
          <div className="dropdown-content">
            <a href="#pages1">Page 1</a>
            <a href="#pages2">Page 2</a>
            <a href="#pages3">Page 3</a>
          </div>
        </li>
      </ul>
      <div className="connect">
        <a href="/contact">Connect with us <FaCaretRight /></a>
      </div>
      <div className="icons">
        <div className="icon"><FaSearch /></div>
        <div className="icon"><FaUser /></div>
        <div className="icon"><FaHeart /><span className="badge">2</span></div>
        <div className="icon"><FaShoppingBag /><span className="badge">0</span></div>
      </div>
    </nav>
  );
};

export default Navbar;

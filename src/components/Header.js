import React from 'react';
import '../css/Header.css';
import headerImage from '../assets/header-image.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Buy Fresh And Organic Grocery Food</h1>
          <p>Discount up to 20%</p>
          <button>Shop Now</button>
          <div className="statistics">
            <div>
              <h3>35k +</h3>
              <p>Users</p>
            </div>
            <div>
              <h3>18k +</h3>
              <p>Products</p>
            </div>
          </div>
        </div>
        <div className="header-image">
          <img src={headerImage} alt="Healthy Food" />
        </div>
      </div>
    </header>
  );
};

export default Header;

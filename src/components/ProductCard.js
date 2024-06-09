import React from 'react';
import '../css/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.strMealThumb} alt={product.strMeal} />
      <h3>{product.strMeal}</h3>
      <p>{product.strCategory}</p>
      <p>{product.strArea}</p>
      <button>Shop Now</button>
    </div>
  );
};

export default ProductCard;

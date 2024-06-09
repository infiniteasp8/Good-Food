import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import ProductCard from './ProductCard';
import '../css/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      const uniqueCategories = [...new Set(data.map(product => product.strCategory))];
      setCategories(uniqueCategories);
      setSelectedCategory(uniqueCategories[0]);
    };

    getProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Top Category Of Organic Food</h2>
      <div className="category-tabs">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className={category === selectedCategory ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="products">
        {products
          .filter(product => product.strCategory === selectedCategory)
          .map(product => (
            <ProductCard key={product.idMeal} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;

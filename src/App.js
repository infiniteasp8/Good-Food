import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProductList />
    </div>
  );
}

export default App;

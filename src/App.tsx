import React from 'react';

import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import products from './mocks/products.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Shopping Land</p>
      </header>
      <body className="mainContainer">
        <ProductCard products={products} />
      </body>
    </div>
  );
}

export default App;

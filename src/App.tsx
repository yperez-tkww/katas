import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import products from './mocks/products.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Land</h1>
      </header>
      <main className="mainContainer">
        <ProductCard products={products} />
      </main>
    </div>
  );
}

export default App;

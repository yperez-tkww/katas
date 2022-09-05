import React from 'react';
import './App.css';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import products from './mocks/products.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Land</h1>
      </header>
      <main className="mainContainer">
        <ProductsGrid products={[products[0]]} />
      </main>
    </div>
  );
}

export default App;

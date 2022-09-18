import './App.css';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import { useContext } from 'react';
import ProductContext from './context/ProductContext';

function App() {
  const products = useContext(ProductContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Land</h1>
      </header>
      <main className="mainContainer">
        <ProductsGrid products={products} />
      </main>
    </div>
  );
}

export default App;

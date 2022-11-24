import './App.scss';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import { useContext } from 'react';
import ProductContext from './context/ProductContext';
import ProductCardTest from './components/ProductCard.tsx/ProductCardTest';

function App() {
  const products = useContext(ProductContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Land</h1>
      </header>
      <main className="mainContainer">
        {/* <main> */}
        <ProductsGrid />
        {/* <ProductCardTest /> */}
      </main>
    </div>
  );
}

export default App;

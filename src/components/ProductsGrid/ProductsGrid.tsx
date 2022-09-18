import { FC, useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import ProductCardGrid from '../ProductCard.tsx/ProductCardGrid';
import ProductCardOverlay from '../ProductCard.tsx/ProductCardOverlay';

//  TODO: ?? Do I pass "product" as props or is there a better another way?
const ProductsGrid: FC = () => {
  const products = useContext(ProductContext);

  return (
    <>
      {products.map((product) => (
        <>
          <ProductCardGrid {...product} key={product.id} />
          <ProductCardOverlay {...product} key={product.id} />
        </>
      ))}
    </>
  );
};

export default ProductsGrid;
